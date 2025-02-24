package com.green.attaparunever2.user;

import com.green.attaparunever2.entity.Order;
import com.green.attaparunever2.entity.ReviewPic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReviewPicRepository extends JpaRepository<ReviewPic, Long> {
    Optional<ReviewPic> findByReviewPicId(Long reviewPicId);
    void deleteByReviewPicId(Long reviewPicId);
    int countByOrder(Order order);
}
