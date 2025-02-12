package com.green.attaparunever2.user.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SelUserOrderPastCheckReq {
    @Schema(description = "유저 아이디", example = "1")
    private long userId;
}
