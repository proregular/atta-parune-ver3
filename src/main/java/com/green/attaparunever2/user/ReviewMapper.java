package com.green.attaparunever2.user;

import com.green.attaparunever2.user.model.GetReviewDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.data.repository.query.Param;

import java.util.List;

@Mapper
public interface ReviewMapper {
    List<GetReviewDto> getReviewList(long userId);
    String getRestaurantPic(long orderId);
    List<String> getMenuList(long orderId);
    List<String> getReviewPicList(long orderId);
}
