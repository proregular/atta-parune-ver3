package com.green.attaparunever2.restaurant.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.green.attaparunever2.common.model.Paging;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Schema(title = "사용자 메인 화면 식당 리스트 요청")
public class GetRestaurantMainReq extends Paging {
    @Schema(title = "식당 카테고리 PK", example = "0", requiredMode = Schema.RequiredMode.REQUIRED)
    private long categoryId;

    public GetRestaurantMainReq(Integer page, Integer size, long categoryId) {
        super(page, size);
        this.categoryId = categoryId;
    }
}