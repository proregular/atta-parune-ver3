package com.green.attaparunever2.user.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Schema(title = "유저 정보 등록")
public class UserUpdateInfoReq {
    @JsonIgnore
    @Schema(description = "사용자 id")
    private Long userId;

    @Schema(description = "닉네임")
    private String nickName;

    @Schema(description = "핸드폰 번호")
    @NotBlank(message = "핸드폰 번호는 필수 입력 항목입니다.")
    private String phone;
}
