package com.green.attaparunever2.restaurant.model;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class RestaurantPicDto {
    private long restaurantId;
    private long picId;
    private List<String> filePath /*picName*/;
}
