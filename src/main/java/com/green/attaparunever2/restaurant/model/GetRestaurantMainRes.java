package com.green.attaparunever2.restaurant.model;

import com.green.attaparunever2.restaurant.restaurant_pic.model.RestaurantPicAroundSel;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetRestaurantMainRes {
    private long restaurantId;
    private String restaurantName;
    private String restaurantAddress;
    private int mealTimeAvg;
    private RestaurantPicDto restaurantPic;
}
