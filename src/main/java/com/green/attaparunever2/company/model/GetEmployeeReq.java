package com.green.attaparunever2.company.model;

import com.green.attaparunever2.common.model.Paging;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

@Getter
public class GetEmployeeReq extends Paging {
    @Schema(description = "검색", example = "홍길동")
    @Pattern(regexp = "^[^0-9]*$", message = "잘못된 사원명입니다. 숫자는 포함될 수 없습니다.")
    private String searchFilter;

    @Schema(description = "회사 PK", example = "1", requiredMode = Schema.RequiredMode.REQUIRED)
    private Long companyId;

    public GetEmployeeReq(Integer page, Integer size, String searchFilter, Long companyId) {
        super(page, size);
        this.searchFilter = searchFilter;
        this.companyId = companyId;
    }
}
