package com.green.attaparunever2.user.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class ReviewRequestDto {
    private int rating;
    private String reviewText;
    private List<String> reviewPic;
}
