package com.green.attaparunever2.user;

import com.green.attaparunever2.common.MyFileUtils;
import com.green.attaparunever2.config.security.AuthenticationFacade;
import com.green.attaparunever2.entity.*;
import com.green.attaparunever2.order.OrderRepository;
import com.green.attaparunever2.order.ticket.TicketRepository;
import com.green.attaparunever2.user.model.ReviewRequestDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final ReviewPicRepository reviewPicRepository;
    private final OrderRepository orderRepository;
    private final TicketRepository ticketRepository;
    private final AuthenticationFacade authenticationFacade;
    private final MyFileUtils myFileUtils;

    @Transactional
    public Review postReview(ReviewRequestDto reviewRequestDto, List<MultipartFile> reviewPics) throws IOException {
        // 1. 로그인한 사용자의 userId
        Long userId = authenticationFacade.getSignedUserId();

        // 2. 주문 정보 조회
        Order order = orderRepository.findByOrderId(reviewRequestDto.getOrderId())
                .orElseThrow(() -> new IllegalArgumentException("주문 정보가 존재하지 않습니다."));

        // 3. 사용자가 본인 주문에 대해서만 리뷰 작성 가능
        if (!order.getUserId().getUserId().equals(userId)) {
            throw new IllegalArgumentException("본인의 주문에 대해서만 리뷰를 작성할 수 있습니다.");
        }

        // 4. 주문과 연결된 식권 정보 조회
        Ticket ticket = ticketRepository.findByOrder(order)
                .orElseThrow(() -> new IllegalArgumentException("식권 정보가 존재하지 않습니다."));

        // 5. 식권 사용 여부 체크 (ticketStatus가 1이어야 함)
        if (ticket.getTicketStatus() != 1) {
            throw new IllegalArgumentException("식권이 사용되지 않았습니다.");
        }

        // 6. 이미 해당 주문에 리뷰가 작성되었는지 확인
        if (reviewRepository.findByOrderId(order.getOrderId()).isPresent()) {
            throw new IllegalArgumentException("이 식권에 대해서는 이미 리뷰가 작성되었습니다.");
        }

        // 7. 사용자가 식사를 한 식당에 대한 리뷰만 작성 가능
        Restaurant restaurant = order.getRestaurantId(); // 식당 정보 가져오기
        if (restaurant == null) {
            throw new IllegalArgumentException("식사를 한 식당 정보가 없습니다.");
        }

        // 8. 식권 사용일자(UseDate)로부터 24시간 이내에만 리뷰 작성 가능
        LocalDateTime useDate = ticket.getUseDate();
        if (useDate == null) {
            throw new IllegalArgumentException("식권 사용일자가 존재하지 않습니다.");
        }

        // 현재 시간이 사용일자(UseDate)로부터 24시간 이내인지 확인
        if (useDate.plusHours(24).isBefore(LocalDateTime.now())) {
            throw new IllegalArgumentException("식권 사용 후 24시간이 경과하여 리뷰를 작성할 수 없습니다.");
        }

        // 9. 리뷰 저장
        Review review = new Review();
        review.setOrder(order);
        review.setRating(reviewRequestDto.getRating());
        review.setReviewText(reviewRequestDto.getReviewText());

        // 리뷰 저장 후 Review 엔티티 생성
        review = reviewRepository.save(review);

        // 10. 리뷰 사진 저장
        if (reviewPics != null && !reviewPics.isEmpty()) {
            if (reviewPics.size() > 3) {
                throw new IllegalArgumentException("리뷰 사진은 최대 3개까지 등록할 수 있습니다.");
            }

            for (MultipartFile file : reviewPics) {
                if (!file.isEmpty()) {
                    // 파일 저장 경로 설정
                    String folderPath = "review_pics/" + order.getOrderId();
                    myFileUtils.makeFolders(folderPath);

                    // 랜덤 파일명 생성 및 저장
                    String savedFileName = myFileUtils.makeRandomFileName(file);
                    String filePath = folderPath + "/" + savedFileName;

                    try {
                        myFileUtils.transferTo(file, filePath);
                    } catch (IOException e) {
                        log.error("파일 저장 실패: {}", e.getMessage());
                        throw new RuntimeException("파일 저장 실패", e);
                    }

                    // ReviewPic 엔티티에 추가
                    ReviewPic reviewPic = new ReviewPic();
                    reviewPic.setOrder(order);
                    reviewPic.setReviewPic(savedFileName);

                    reviewPicRepository.save(reviewPic);
                }
            }
        }

        return review;
    }

    @Transactional
    public Review updReview(ReviewRequestDto reviewRequestDto, List<MultipartFile> reviewPics, Long reviewPicIdToDelete) throws IOException {
        Long userId = authenticationFacade.getSignedUserId();

        // 1. 주문 정보 조회
        Order order = orderRepository.findByOrderId(reviewRequestDto.getOrderId())
                .orElseThrow(() -> new IllegalArgumentException("주문 정보가 존재하지 않습니다."));

        // 2. 사용자는 본인 주문에 대해서만 리뷰를 작성할 수 있음
        if (!order.getUserId().getUserId().equals(userId)) {
            throw new IllegalArgumentException("본인의 주문에 대해서만 리뷰를 수정할 수 있습니다.");
        }

        // 3. 리뷰 정보 조회
        Review review = reviewRepository.findByOrderId(order.getOrderId())
                .orElseThrow(() -> new IllegalArgumentException("리뷰 정보가 존재하지 않습니다."));

        // 4. 평점은 1~5점만 가능
        int rating = reviewRequestDto.getRating();
        if (rating < 1 || rating > 5) {
            throw new IllegalArgumentException("평점은 1점에서 5점 사이여야 합니다.");
        }

        // 5. 리뷰 내용 수정
        review.setRating(rating);
        review.setReviewText(reviewRequestDto.getReviewText());

        // 6. 기존 리뷰 사진 삭제
        if (reviewPicIdToDelete != null) {
            Optional<ReviewPic> reviewPicToDelete = reviewPicRepository.findByReviewPicId(reviewPicIdToDelete);
            if (reviewPicToDelete.isPresent()) {
                // 파일 삭제
                String filePath = "review_pics/" + order.getOrderId() + "/" + reviewPicToDelete.get().getReviewPic();
                myFileUtils.deleteFile(filePath);

                reviewPicRepository.deleteByReviewPicId(reviewPicIdToDelete);
            } else {
                throw new IllegalArgumentException("삭제할 리뷰 사진이 존재하지 않습니다.");
            }
        }

        // 7. 새로운 리뷰 사진 추가
        int currentPicCount = reviewPicRepository.countByOrder(order);
        int newPicsCount = reviewPics != null ? reviewPics.size() : 0;
        int totalPicsCount = currentPicCount + newPicsCount;

        if (totalPicsCount > 3) {
            throw new IllegalArgumentException("리뷰 사진은 최대 3개까지 등록할 수 있습니다.");
        }

        if (reviewPics != null && !reviewPics.isEmpty()) {
            for (MultipartFile file : reviewPics) {
                if (!file.isEmpty()) {
                    // 파일 저장 경로 설정
                    String folderPath = "review_pics/" + order.getOrderId();
                    myFileUtils.makeFolders(folderPath);

                    // 랜덤 파일명 생성 및 저장
                    String savedFileName = myFileUtils.makeRandomFileName(file);
                    String filePath = folderPath + "/" + savedFileName;

                    try {
                        myFileUtils.transferTo(file, filePath);
                    } catch (IOException e) {
                        log.error("파일 저장 실패: {}", e.getMessage());
                        throw new RuntimeException("파일 저장 실패", e);
                    }

                    // ReviewPic 엔티티에 추가
                    ReviewPic reviewPic = new ReviewPic();
                    reviewPic.setOrder(order);
                    reviewPic.setReviewPic(savedFileName);

                    reviewPicRepository.save(reviewPic);
                }
            }
        }

        return review;
    }
}
