package com.green.attaparunever2.admin.restaurant;

import com.green.attaparunever2.admin.AdminRepository;
import com.green.attaparunever2.admin.restaurant.model.*;
import com.green.attaparunever2.common.excprion.CustomException;
import com.green.attaparunever2.config.security.AuthenticationFacade;
import com.green.attaparunever2.entity.*;
import com.green.attaparunever2.order.OrderRepository;
import com.green.attaparunever2.order.ticket.TicketRepository;
import com.green.attaparunever2.restaurant.RestaurantRepository;
import com.green.attaparunever2.user.ReviewRepository;
import com.green.attaparunever2.user.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class AdminRestaurantService {
    private final AuthenticationFacade authenticationFacade;
    private final AdminRepository adminRepository;
    private final RestaurantRepository restaurantRepository;
    private final OrderRepository orderRepository;
    private final ReviewCommentRepository reviewCommentRepository;
    private final ReviewRepository reviewRepository;
    private final BlackListRepository blackListRepository;
    private final UserRepository userRepository;

    public int postReviewComment(InsReviewCommentReq req) {
        // 식당 관리자 권한 인증
        Long signedAdminId = authenticationFacade.getSignedUserId();
        if (!signedAdminId.equals(req.getAdminId())) {
            throw new CustomException("로그인한 관리자 계정과 일치하지 않는 관리자 정보입니다.", HttpStatus.BAD_REQUEST);
        }

        Admin admin = adminRepository.findById(req.getAdminId())
                .orElseThrow(() -> new CustomException(("관리자 정보를 찾을 수 없습니다."), HttpStatus.NOT_FOUND));

        Restaurant restaurant = restaurantRepository.findById(admin.getDivisionId())
                .orElseThrow(() -> new CustomException(("식당 정보를 찾을 수 없습니다."), HttpStatus.NOT_FOUND));

        if (!admin.getDivisionId().equals(restaurant.getRestaurantId())) {
            throw new CustomException("식당에 대한 권한이 없습니다.", HttpStatus.BAD_REQUEST);
        }


        Order order = orderRepository.findById(req.getOrderId())
                .orElseThrow(() -> new CustomException("주문 정보를 찾을 수 없습니다.", HttpStatus.NOT_FOUND));

        if (!admin.getDivisionId().equals(order.getRestaurantId().getRestaurantId())) {
            throw new CustomException("해당 리뷰에 댓글을 작성할 권한이 없습니다.", HttpStatus.BAD_REQUEST);
        }

        ReviewComment reviewComment = new ReviewComment();
        reviewComment.setOrder(order);
        reviewComment.setCommentText(req.getCommentText());
        reviewCommentRepository.save(reviewComment);

        return 1;
    }

    public int patchReviewDelRequest(UpdReviewDelRequestReq req) {
        Long signedAdminId = authenticationFacade.getSignedUserId();
        if (!signedAdminId.equals(req.getAdminId())) {
            throw new CustomException("로그인한 관리자 계정과 일치하지 않는 관리자 정보입니다.", HttpStatus.BAD_REQUEST);
        }

        Admin admin = adminRepository.findById(req.getAdminId())
                .orElseThrow(() -> new CustomException("관리자 정보를 찾을 수 없습니다.", HttpStatus.NOT_FOUND));

        Order order = orderRepository.findById(req.getOrderId())
                .orElseThrow(() -> new CustomException("주문 정보를 찾을 수 없습니다.", HttpStatus.NOT_FOUND));

        if (!admin.getDivisionId().equals(order.getRestaurantId().getRestaurantId())) {
            throw new CustomException("해당 리뷰에 삭제 요청할 권한이 없습니다.", HttpStatus.BAD_REQUEST);
        }

        Review review = reviewRepository.findById(req.getOrderId())
                .orElseThrow(() -> new CustomException("리뷰 정보가 없습니다.", HttpStatus.NOT_FOUND));

        review.setReviewStatus(1);
        reviewRepository.save(review);

        return 1;
    }

    public int postBlackList(InsBlackListReq req) {
        // 관리자 로그인 인증
        Long signedAdminId = authenticationFacade.getSignedUserId();
        if (!signedAdminId.equals(req.getAdminId())) {
            throw new CustomException("로그인한 관리자 계정과 일치하지 않는 관리자 정보입니다.", HttpStatus.BAD_REQUEST);
        }

        Admin admin = adminRepository.findById(req.getAdminId())
                .orElseThrow(() -> new CustomException("관리자 정보를 찾을 수 없습니다.", HttpStatus.NOT_FOUND));

        Restaurant restaurant = restaurantRepository.findById(req.getRestaurantId())
                .orElseThrow(() -> new CustomException("식당 정보를 찾을 수 없습니다.", HttpStatus.NOT_FOUND));

        // 본인 식당의 관리자가 맞는지 확인 절차
        if (!admin.getDivisionId().equals(restaurant.getRestaurantId())) {
            throw new CustomException("해당 식당의 관리자가 아닙니다.", HttpStatus.BAD_REQUEST);
        }

        // 블랙리스트 등록하려는 사용자가 해당 식당에 주문한 기록이 있는지 확인
        User user = userRepository.findById(req.getUserId())
                .orElseThrow(() -> new CustomException("유저 정보를 찾을 수 없습니다.", HttpStatus.NOT_FOUND));

        Optional<Order> order = orderRepository.findByRestaurantIdAndUserId(restaurant, user);
        if (order.isEmpty()) {
            throw new CustomException("해당 식당에 대한 주문 내역이 없는 사용자입니다.", HttpStatus.BAD_REQUEST);
        }

        // BlackListIds 객체 생성 및 값 설정
        BlackListIds blackListIds = new BlackListIds();
        blackListIds.setRestaurantId(restaurant.getRestaurantId()); // restaurantId 설정
        blackListIds.setUserId(user.getUserId()); // userId 설정

        // BlackList 객체 생성 및 값 설정
        BlackList blackList = new BlackList();
        blackList.setBlackListIds(blackListIds); // BlackListIds 설정
        blackList.setRestaurant(restaurant);
        blackList.setUser(user);
        blackList.setReason(req.getReason());
        blackListRepository.save(blackList);

        return 1;
    }

    public int delBlackList(DelBlackListReq req) {
        // 관리자 로그인 인증
        Long signedAdminId = authenticationFacade.getSignedUserId();
        if (!signedAdminId.equals(req.getAdminId())) {
            throw new CustomException("로그인한 관리자 계정과 일치하지 않는 관리자 정보입니다.", HttpStatus.BAD_REQUEST);
        }

        Admin admin = adminRepository.findById(req.getAdminId())
                .orElseThrow(() -> new CustomException("관리자 정보를 찾을 수 없습니다.", HttpStatus.NOT_FOUND));

        Restaurant restaurant = restaurantRepository.findById(req.getRestaurantId())
                .orElseThrow(() -> new CustomException("식당 정보를 찾을 수 없습니다.", HttpStatus.NOT_FOUND));

        // 본인 식당의 관리자가 맞는지 확인 절차
        if (!admin.getDivisionId().equals(restaurant.getRestaurantId())) {
            throw new CustomException("해당 식당의 관리자가 아닙니다.", HttpStatus.BAD_REQUEST);
        }

        BlackList blackList = blackListRepository.findByRestaurantIdAndUserId(req.getRestaurantId(), req.getUserId())
                .orElseThrow(() -> new CustomException("블랙리스트 명단에 없는 사용자입니다.", HttpStatus.NOT_FOUND));

        blackListRepository.delete(blackList);

        return 1;
    }

    public int patchPaymentPassword(UpdPaymentPasswordReq req) {
        // 관리자 로그인 인증
        Long signedAdminId = authenticationFacade.getSignedUserId();
        if (!signedAdminId.equals(req.getAdminId())) {
            throw new CustomException("로그인한 관리자 계정과 일치하지 않는 관리자 정보입니다.", HttpStatus.BAD_REQUEST);
        }

        Admin admin = adminRepository.findById(req.getAdminId())
                .orElseThrow(() -> new CustomException("관리자 정보를 찾을 수 없습니다.", HttpStatus.NOT_FOUND));

        Restaurant restaurant = restaurantRepository.findById(req.getRestaurantId())
                .orElseThrow(() -> new CustomException("식당 정보를 찾을 수 없습니다.", HttpStatus.NOT_FOUND));

        // 본인 식당의 관리자가 맞는지 확인 절차
        if (!admin.getDivisionId().equals(restaurant.getRestaurantId())) {
            throw new CustomException("해당 식당의 관리자가 아닙니다.", HttpStatus.BAD_REQUEST);
        }

        // 비밀번호 암호화
        String hashedPassword = BCrypt.hashpw(req.getPaymentPassword(), BCrypt.gensalt());

        restaurant.setPaymentPassword(hashedPassword);
        restaurantRepository.save(restaurant);

        return 1;
    }
}
