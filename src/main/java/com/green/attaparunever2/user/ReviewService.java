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
//
//        Order order = orderRepository.findByOrderId(orderId)
//                .orElseThrow(() -> new IllegalArgumentException("주문 정보가 존재하지 않습니다."));
//
//
//
//
//
//        if (reviewRepository.findByOrderId(orderId).isPresent()) {
//            throw new IllegalArgumentException("이 식권에 대해서는 이미 리뷰가 작성되었습니다.");
//        }
//
//
//
//
//
//        Restaurant restaurant = order.getRestaurantId(); // 수정된 부분
//        if (restaurant == null) {
//            throw new IllegalArgumentException("식사를 한 식당 정보가 없습니다.");
//        }
//
//
//        Review review = new Review();
//        review.setOrder(order);
//        review.setRating(rating);
//        review.setReviewText(reviewText);
//
//        return reviewRepository.save(review);
//    }
}
