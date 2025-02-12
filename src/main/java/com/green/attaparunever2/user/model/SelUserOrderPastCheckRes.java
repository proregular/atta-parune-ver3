package com.green.attaparunever2.user.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SelUserOrderPastCheckRes {
    private long restaurantId;
    @Schema(description = "레스토랑 이름")
    private String restaurantName;
    @Schema(description = "레스토랑 사진")
    private String filePath;
    @Schema(description = "레스토랑 현장/예약")
    private int reservationYn;
    @Schema(description = "메뉴이름")
    private String menuName;
    @Schema(description = "메뉴 총 가격")
    private int menuTotalPrice;
    @Schema(description = "메뉴 갯수")
    private int menuCount;
    @Schema(description = "예약한 일자")
    private String createdAt;
    private Long ticketId;
}
