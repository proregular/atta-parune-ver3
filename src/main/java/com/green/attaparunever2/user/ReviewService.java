package com.green.attaparunever2.user;

import com.green.attaparunever2.entity.Order;
import com.green.attaparunever2.entity.Restaurant;
import com.green.attaparunever2.entity.Review;
import com.green.attaparunever2.entity.Ticket;
import com.green.attaparunever2.order.OrderRepository;
import com.green.attaparunever2.order.ticket.TicketRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@Slf4j
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final OrderRepository orderRepository;
    private final TicketRepository ticketRepository;

//    @Transactional
//    public Review postReview(Long orderId, int rating, String reviewText) {
//        // 1. 주문 정보 조회
//        Order order = orderRepository.findByOrderId(orderId)
//                .orElseThrow(() -> new IllegalArgumentException("주문 정보가 존재하지 않습니다."));
//
//        // 2. 주문과 연결된 식권 정보 조회
//        Ticket ticket = ticketRepository.findByOrderId(order.getOrderId())
//                .orElseThrow(() -> new IllegalArgumentException("식권 정보가 존재하지 않습니다."));
//
//        // 3. 식권 사용 여부 체크 (ticketStatus가 1이어야 함)
//        if (ticket.getTicketStatus() != 1) {
//            throw new IllegalArgumentException("식권이 사용되지 않았습니다.");
//        }
//
//        // 4. 이미 해당 주문에 리뷰가 작성되었는지 확인
//        if (reviewRepository.findByOrderId(orderId).isPresent()) {
//            throw new IllegalArgumentException("이 식권에 대해서는 이미 리뷰가 작성되었습니다.");
//        }
//
//        // 5. 사용자가 식사를 한 식당에 대한 리뷰만 작성 가능
//        Restaurant restaurant = order.getRestaurantId(); // 식당 정보 가져오기
//        if (restaurant == null) {
//            throw new IllegalArgumentException("식사를 한 식당 정보가 없습니다.");
//        }
//
//        // 6. 리뷰 저장
//        Review review = new Review();
//        review.setOrder(order);
//        review.setRating(rating);
//        review.setReviewText(reviewText);
//
//        return reviewRepository.save(review);
//    }
}
