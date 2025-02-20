package com.green.attaparunever2.company.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetEmployeeReq {
    @Schema(description = "검색", example = "홍길동")
    private String searchFilter;

    @Schema(description = "회사 PK", example = "1")
    private String companyId;
}
