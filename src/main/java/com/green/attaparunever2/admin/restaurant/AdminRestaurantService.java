package com.green.attaparunever2.admin.restaurant;

import com.green.attaparunever2.admin.AdminRepository;
import com.green.attaparunever2.admin.restaurant.model.InsReviewCommentReq;
import com.green.attaparunever2.common.excprion.CustomException;
import com.green.attaparunever2.config.security.AuthenticationFacade;
import com.green.attaparunever2.entity.Admin;
import com.green.attaparunever2.entity.Order;
import com.green.attaparunever2.entity.Restaurant;
import com.green.attaparunever2.entity.ReviewComment;
import com.green.attaparunever2.order.OrderRepository;
import com.green.attaparunever2.restaurant.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class AdminRestaurantService {
    private final AuthenticationFacade authenticationFacade;
    private final AdminRepository adminRepository;
    private final RestaurantRepository restaurantRepository;
    private final OrderRepository orderRepository;
    private final ReviewCommentRepository reviewCommentRepository;

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

        ReviewComment reviewComment = new ReviewComment();
        reviewComment.setOrder(order);
        reviewComment.setCommentText(req.getCommentText());
        reviewCommentRepository.save(reviewComment);

        return 1;
    }
}
