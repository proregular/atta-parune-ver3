package com.green.attaparunever2.order.ticket;

import com.green.attaparunever2.common.excprion.CustomException;
import com.green.attaparunever2.order.ticket.model.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class TicketService {
    private final TicketMapper mapper;
    private final TicketMapper ticketMapper;
    private final SimpMessagingTemplate messagingTemplate;
    //private final OrderMapper orderMapper;
    //private final PaymentUserMapper paymentUserMapper;

//    public long postTicket(TicketPostReq p) {
//
//        OrderDto order = orderMapper.getOrder(new OrderGetReq(p.getOrderId()));
//        if (order == null) {
//            throw new CustomException("해당 주문이 존재하지 않습니다.", HttpStatus.NOT_FOUND);
//        }
//
//        long orderId = order.getOrderId();
//        int totalPrice = order.getTotalPrice();
//
//        // 사용자의 포인트 조회
//        PaymentUserDto userPoint = paymentUserMapper.getPoint(orderId);
//
//        if (userPoint == null) {
//            throw new CustomException("등록된 포인트가 없습니다.", HttpStatus.NOT_FOUND);
//        }
//
//        int point = userPoint.getPoint();
//
//        if (point < totalPrice) {
//            throw new RuntimeException("사용자의 포인트가 부족합니다.");
//        }
//
//        if (point != totalPrice) {
//            throw new RuntimeException("포인트와 주문 금액이 일치하지 않습니다.");
//        }
//
//        return mapper.postTicket(p);
//    }

    public TicketGetRes getTicket(TicketGetReq p) {
        TicketGetRes res = new TicketGetRes();

        TicketDto ticket = mapper.getTicket(p.getTicketId());
        res.setTicket(ticket);

        if (ticket == null) {
            throw new RuntimeException("해당 주문에 대한 식권이 존재하지 않습니다.");
        }

        return res;
    }

    // 식권 사용 완료 처리
    @Transactional
    public int updTicket(long ticketId) {
        // 식권 사용일 조회
        TicketUseDateSelRes res = mapper.selTicketUseDate(ticketId);

        // 식권이 존재하지 않으면 예외 처리
        if (res == null) {
            throw new CustomException("존재하지 않는 티켓입니다.", HttpStatus.BAD_REQUEST);
        }

        // 이미 사용된 식권일 경우 예외 처리
        if (res.getUseDate() != null && !res.getUseDate().isEmpty()) {
            throw new CustomException("이미 사용된 티켓입니다.", HttpStatus.BAD_REQUEST);
        }
        // 식권 수정
        int result = mapper.updTicket(ticketId);

        // 식권 수정에 실패
        if (result == 0) {
            throw new CustomException("식권 사용에 실패하였습니다.", HttpStatus.BAD_REQUEST);
        }

        SelTicketDto dto = ticketMapper.selTicketByTicketId(ticketId);

        // 사용자에게 식권사용 완료 메세지 전송
        messagingTemplate.convertAndSend(
                "/queue/reservation/" + dto.getOrderId() + "/user/reservation",
                dto
        );

        return result;
    }

    public long getTicketOne(long userId){
        long result = ticketMapper.selTicketOne(userId);

        return result;
    }
}
