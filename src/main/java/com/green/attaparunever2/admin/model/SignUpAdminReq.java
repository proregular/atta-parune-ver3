package com.green.attaparunever2.admin.model;


import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SignUpAdminReq {
    @Schema(description = "관리자 PK", example = "1", requiredMode = Schema.RequiredMode.REQUIRED)
    private Long adminId;

    @Schema(description = "아이디", example = "asd", requiredMode = Schema.RequiredMode.REQUIRED)
    private String aid;

    @Schema(description = "비밀번호", example = "asd", requiredMode = Schema.RequiredMode.REQUIRED)
    private String apw;

    @Schema(description = "이름", example = "홍길동", requiredMode = Schema.RequiredMode.REQUIRED)
    private String name;

    @Schema(description = "전화번호", example = "01012311231", requiredMode = Schema.RequiredMode.REQUIRED)
    private String phone;
}
