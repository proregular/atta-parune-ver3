package com.green.attaparunever2.user.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Schema(title = "유저 정보 수정")
public class UserUpdateInfoReq {
    @JsonIgnore
    private Long userId;

    @Schema(description = "닉네임")
    private String nickName;

    @Schema(description = "핸드폰 번호")
    @NotEmpty(message = "핸드폰 번호는 필수 입력 항목입니다.")
    private String phone;
}
