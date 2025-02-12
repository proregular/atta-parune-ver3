package com.green.attaparunever2.user.user_payment_member;

import com.green.attaparunever2.common.excprion.CustomException;
import com.green.attaparunever2.config.security.AuthenticationFacade;
import com.green.attaparunever2.order.OrderMapper;
import com.green.attaparunever2.order.model.OrderSelDto;
import com.green.attaparunever2.order.ticket.TicketMapper;
import com.green.attaparunever2.order.ticket.model.TicketSelDto;
import com.green.attaparunever2.reservation.ReservationMapper;
import com.green.attaparunever2.reservation.model.ReservationDto;
import com.green.attaparunever2.user.UserMapper;
import com.green.attaparunever2.user.model.TicketMakeMessageRes;
import com.green.attaparunever2.user.model.UserDTO;
import com.green.attaparunever2.user.model.UserGetReq;
import com.green.attaparunever2.user.model.UserGetRes;
import com.green.attaparunever2.user.user_payment_member.model.*;
import com.green.attaparunever2.user.user_payment_member.scheduler.TicketScheduler;
import com.green.attaparunever2.user.user_payment_member.scheduler.UserPaymentMemberScheduler;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserPaymentMemberService {
    private final UserPaymentMemberMapper userPaymentMemberMapper;
    private final SimpMessagingTemplate messagingTemplate;
    private final UserPaymentMemberScheduler userPaymentMemberScheduler;
    private final OrderMapper orderMapper;
    private final UserMapper userMapper;
    private final TicketMapper ticketMapper;
    private final ReservationMapper reservationMapper;
    private final TicketScheduler ticketScheduler;
    private final AuthenticationFacade authenticationFacade;

    //사용자 포인트 조회
    public UserGetPointRes getPoint(long userId) {
        UserGetPointRes point = null;

        try {
            point = userPaymentMemberMapper.getPoint(userId);
        }catch (Exception e) {
            throw new CustomException("포인트 조회시 오류가 발생했습니다.", HttpStatus.BAD_REQUEST);
        }

        return point;
    }

    //결제 등록(미사용 하는 메소드!!!!!!!!!!1)
    @Transactional
    public int postPayment(UserPostPaymentReq p) {
        int result = 0;
        try {
            log.debug("orderId::" + p.getOrderId());
            /*
            함께 결제가 아니라 1명이 계산해야하는 경우
                1.결제해야하는 사람이 가지고있는 포인트를 확인
                2.주문금액보다 포인트가 많은지 확인
                    결제금액은 여러명일시 총 금액/인원수로 한 사람이 결제해야하는 금액을 가져온다

            직관적으로 개발하는편이 우선은 좋을 것 같음
            */

//          1.결제해야하는 사람이 가지고있는 포인트를 확인
            UserGetPointRes userPointInfo = userPaymentMemberMapper.getPoint(p.getUserId());

//          2.주문금액보다 포인트가 많은지 확인
            int price = userPaymentMemberMapper.getOrderPrice(p.getOrderId());

//          1번과 2번을 비교하여 결제할 수 있는지 체크
            if(userPointInfo.getPoint() >= price)
            {
                p.setPoint(price);
                result = userPaymentMemberMapper.insertPaymentMember(p);

                // 사용자에게 결재요청 메세지 보냄
                OrderSelDto orderSelDto = orderMapper.selOrderByOrderId(p.getOrderId());
                List<UserPaymentMemberDto> userPaymentMemberDtoList = userPaymentMemberMapper.selUserPaymentMemberByOrderId(p.getOrderId());
                UserGetReq userGetReq = new UserGetReq();
                userGetReq.setUserId(p.getUserId());

                UserGetRes user = userMapper.selUserByUserId(p.getUserId());
                UserPostPaymentMessageRes messageRes = new UserPostPaymentMessageRes();

                messageRes.setTypeMessage("결재 요청");
                messageRes.setPoint(p.getPoint());
                messageRes.setOrderUserName(user.getName());
                messageRes.setOrderUserId(orderSelDto.getUserId());
                messageRes.setOrderId(p.getOrderId());
                messageRes.setUserId(p.getUserId());

                if(orderSelDto.getUserId() != p.getUserId()) {
                    // 유저 구독 경로로 예약 알림 메시지 전송
                    messagingTemplate.convertAndSend(
                            "/queue/user/" + p.getUserId() + "/user/userPaymentMember",
                            messageRes
                    );

                    // 요청 5분 뒤 업데이트 안할 시 거절 처리할 스케줄러 실행
                    //userPaymentMemberScheduler.scheduleCancellation(user.getOrderId(), user.getUserId());
                }

            } else {
                int amount = price - userPointInfo.getPoint();
                String msg = "결제금액이("+amount+"원) 부족합니다.";
                throw new CustomException(msg, HttpStatus.OK);
            }

        } catch (Exception e) {
            String msg = "결제정보 등록시 에러가 발생하였습니다.";
            throw new CustomException(msg, HttpStatus.BAD_REQUEST);
        }

        return result;
    }

    //유저 결제 멤버 확인
    public List<SelUserPaymentMemberRes> getUserPaymentMember(long orderId) {
        List<SelUserPaymentMemberRes> resList = userPaymentMemberMapper.selUserPaymentMember(orderId);
        return resList;
    }

    //승인 상태 확인
    public List<SelUserOrderApprovalRes> getUserOrderApprovalAccess(long orderId){
        List<SelUserOrderApprovalRes> userOrderApprovalList = userPaymentMemberMapper.selUserOrderApprovalAccess(orderId);
        return userOrderApprovalList;
    }

    //결제요청(티켓 생성)
    public long postTicket(PostTicketReq p){
        // 1.오더 아이디에 포함된 사용자들이 전부 승인을 했는지 여부
        List<SelUserOrderApprovalRes> list = userPaymentMemberMapper.selUserOrderApprovalAccess(p.getOrderId());

        int sumMenuPrice = userPaymentMemberMapper.sumMenuPrice(p.getOrderId());
        int sumUserPoint = 0;
        for(SelUserOrderApprovalRes item : list) {
            if (item.getApprovalStatus() != 1) {
                throw new CustomException("모두 승인이 되어있지않습니다.", HttpStatus.BAD_REQUEST);
            }
            // 2. 포인트가 사용자에게 실제로 있는지
            if(item.getPoint() > item.getUserPoint()) {
                throw new CustomException("승인할 금액이 부족합니다.", HttpStatus.BAD_REQUEST);
            }
            sumUserPoint += item.getPoint();
        }

        log.info("sumMenuPrice : {}, sumUserPoint : {}", sumMenuPrice, sumUserPoint);
        if(sumMenuPrice != sumUserPoint) {
            throw new CustomException("금액이 정확하지 않습니다.", HttpStatus.BAD_REQUEST);
        }


        for (SelUserOrderApprovalRes item : list) {
            log.info("userPoint : {}, itemPoint {}", item.getUserPoint(), item.getPoint());

            userPaymentMemberMapper.updUserPoint(item.getPoint(), item.getUserId());
        }

        int result = userPaymentMemberMapper.insTicket(p);

        if(result > 0) {
            OrderSelDto orderSelDto = orderMapper.selOrderByOrderId(p.getOrderId());

            // 사장님 구독 경로로 식권생성 완료 메세지 전송
            TicketMakeMessageRes ticketMakeMessageRes = new TicketMakeMessageRes();

            ticketMakeMessageRes.setTypeMessage("주문에 대한 식권 생성됨(즉 예약 완료됨)");
            ticketMakeMessageRes.setOrderId(orderSelDto.getOrderId());
            ticketMakeMessageRes.setUserId(orderSelDto.getUserId());
            ticketMakeMessageRes.setCreatedAt(orderSelDto.getCreatedAt());
            ticketMakeMessageRes.setRestaurantId(orderSelDto.getRestaurantId());
            ticketMakeMessageRes.setReservationYn(orderSelDto.getReservationYn());
            ticketMakeMessageRes.setReservationStatus(orderSelDto.getReservationStatus());

            messagingTemplate.convertAndSend(
                    "/queue/restaurant/" + orderSelDto.getRestaurantId() + "/owner/reservation",
                    ticketMakeMessageRes
            );

            TicketSelDto ticketDto =  ticketMapper.selTicketByOrderId(p.getOrderId());
            ReservationDto reservationDto = reservationMapper.selReservationByOrderId(p.getOrderId());
            LocalDateTime time = ticketDto.getCreatedAt();

            // 예약이 존재하는 경우 예약시간으로
            if(reservationDto != null) {
                time = reservationDto.getReservationTime();
            }

            // 식권생성 후 2 시간 후 결재 처리
            ticketScheduler.scheduleCancellation(p.getOrderId(), time);
        }

        return p.getTicketId();
    }


//    //결제 인원 조회
//    public int getPaymentMember(long orderId) {
//        int targetCnt = 0;
//        try {
//            targetCnt = userPaymentMemberMapper.getPaymentMember(orderId);
//
//        } catch (Exception e) {
//            String msg = "결제 인원 조회시 에러가 발생하였습니다.";
//            throw new CustomException(msg, HttpStatus.BAD_REQUEST);
//        }
//
//        return targetCnt;
//    }

    //결제 인원 조회 >> 수정
    public List<PaymentMemberDto> getPaymentMemberByName(UserPaymentMemberGetReq p, String name) {
        int size = p.getSize();
        int startIdx = (p.getPage() - 1) * size;
        List<PaymentMemberDto> memberList = userPaymentMemberMapper.getPaymentMemberByName(p.getCompanyId(), name, size, startIdx);
        return memberList;
    }

    @Transactional
    public int updPaymentAmount(UserPaymentAmountPatchReq p) {
        int result = userPaymentMemberMapper.updPaymentAmount(p);
        if(result > 0) {
            OrderSelDto orderSelDto = orderMapper.selOrderByOrderId(p.getOrderId());

            UserGetRes user = userMapper.selUserByUserId(orderSelDto.getUserId());
            UserPostPaymentMessageRes messageRes = new UserPostPaymentMessageRes();

            messageRes.setTypeMessage("결재 요청");
            messageRes.setPoint(p.getPoint());
            messageRes.setOrderUserName(user.getName());
            messageRes.setOrderUserId(orderSelDto.getUserId());
            messageRes.setOrderId(p.getOrderId());
            messageRes.setUserId(p.getUserId());

            if(orderSelDto.getUserId() != p.getUserId()) {
                // 유저 구독 경로로 예약 알림 메시지 전송
                messagingTemplate.convertAndSend(
                        "/queue/user/" + p.getUserId() + "/user/userPaymentMember",
                        messageRes
                );

                // 요청 5분 뒤 업데이트 안할 시 거절 처리할 스케줄러 실행
                //userPaymentMemberScheduler.scheduleCancellation(user.getOrderId(), user.getUserId());
            }
        }

        return result;
    }

    public int deletePaymentMember(UserPaymentMemberDelReq p) {
        return userPaymentMemberMapper.deletePaymentMember(p);
    }



    //내게 온 결제 승인요청 정보조회
    public UserGetPaymentInfoRes getPaymentInfo(UserGetPaymentInfoReq p) {
        p.setOrderUserId(authenticationFacade.getSignedUserId());
        UserGetPaymentInfoRes result = null;
        try {
            /*
             내게 온 결제 정보는 user_payment_member 테이블에 order_id, user_id로 조회 할 수 있지만,
             사용자 화면에 승인요청 정보를 표출시 메뉴명을 보여주고싶다면
              + 식당명, 요청자, 결제id (PK)
             */
            result = userPaymentMemberMapper.getPaymentInfo(p);
        } catch (Exception e) {
            String msg = "내게 온 결제 승인요청 정보조회시 에러가 발생하였습니다.";
            throw new CustomException(msg, HttpStatus.BAD_REQUEST);
        }

        return result;
    }

    //나에게 온 결제 요청 정보 승인 및 거부
    public int patchPaymentMember(UserPatchPaymentMemberReq p) {
        int result = userPaymentMemberMapper.patchPaymentMember(p);

        return result;
    }

    @Transactional
    public int postPaymentMember(UserPostPaymentMemberReq req) {
        OrderSelDto orderSelDto = orderMapper.selOrderByOrderId(req.getOrderId());

        // userId와 point 리스트의 길이가 일치하지 않으면 예외 처리
        if (req.getUserId().size() != req.getPoint().size()) {
            throw new CustomException("사용자 수와 금액 수가 일치하지 않습니다.", HttpStatus.BAD_REQUEST);
        }

        List<Long> userIds = req.getUserId();

        // user 테이블에서 각 userId의 포인트 조회
        List<UserGetPointRes> userPoints = new ArrayList<>();
        for (Long userId : userIds) {
            userPoints.add(userPaymentMemberMapper.getPoint(userId)); // user 테이블에서 포인트 조회
        }

        // userId별로 user 테이블의 포인트와 비교하여 초과하면 예외 처리
        for (int i = 0; i < userIds.size(); i++) {
            Long userId = userIds.get(i);
            int requestedPoint = req.getPoint().get(i); // 요청된 포인트 (user_payment_member 테이블에 저장될 포인트)
            int userTablePoint = userPoints.get(i).getPoint(); // user 테이블에서 조회한 포인트
            // 요청된 포인트가 user 테이블의 포인트를 초과하면 예외 처리
            if (requestedPoint > userTablePoint) {
                throw new CustomException("현재 보유 금액보다 결제 금액이 큽니다.", HttpStatus.BAD_REQUEST);
            }
        }

        // userId와 point를 결합하여 새로운 리스트 생성
        List<PostPaymentUserIdAndPoint> paymentMembers = new ArrayList<>();
        for (int i = 0; i < req.getUserId().size(); i++) {
            // Long -> long, Integer -> int로 변환하여 PostPaymentUserIdAndPoint 객체 생성

            int status = orderSelDto.getUserId() == req.getUserId().get(i).longValue() ? 1: 0;
            log.info("asdasdasdasd: {}", status);
            paymentMembers.add(new PostPaymentUserIdAndPoint(
                    req.getOrderId(),
                    req.getUserId().get(i).longValue(),  // Long -> long
                    req.getPoint().get(i).intValue(),     // Integer -> int
                    status
            ));

        }

        // 변환된 리스트를 매퍼로 전달
        int result = userPaymentMemberMapper.postPaymentMember(paymentMembers);

        // 저장에 성공하면 사용자에게 승인 요청을 보냄
        if(result >= 1) {

            List<UserPaymentMemberDto> userPaymentMemberDtoList = userPaymentMemberMapper.selUserPaymentMemberByOrderId(req.getOrderId());

            for(UserPaymentMemberDto user : userPaymentMemberDtoList) {
                if(orderSelDto.getUserId() != user.getUserId()) {
                    // 유저 구독 경로로 예약 알림 메시지 전송
                    UserGetRes selUser = userMapper.selUserByUserId(orderSelDto.getUserId());
                    UserPostPaymentMessageRes messageRes = new UserPostPaymentMessageRes();

                    messageRes.setTypeMessage("결재 요청");
                    messageRes.setPoint(user.getPoint());
                    messageRes.setOrderUserName(selUser.getName());
                    messageRes.setOrderUserId(orderSelDto.getUserId());
                    messageRes.setOrderId(req.getOrderId());
                    messageRes.setUserId(user.getUserId());

                    messagingTemplate.convertAndSend(
                            "/queue/user/" + user.getUserId() + "/user/userPaymentMember",
                            req
                    );

                    // 요청 5분 뒤 업데이트 안할 시 거절 처리할 스케줄러 실행
                    //userPaymentMemberScheduler.scheduleCancellation(user.getOrderId(), user.getUserId());
                }
            }
        }
        return result;
    }
}
