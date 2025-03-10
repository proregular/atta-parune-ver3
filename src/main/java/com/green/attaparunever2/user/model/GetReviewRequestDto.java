package com.green.attaparunever2.user.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class GetReviewRequestDto {
    private Long orderId;
    private String restaurantName;
    private String reviewText;
    private String statusChangedAt;
}
