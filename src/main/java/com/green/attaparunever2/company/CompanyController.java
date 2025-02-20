package com.green.attaparunever2.company;

import com.green.attaparunever2.common.model.ResultResponse;
import com.green.attaparunever2.company.model.CompanyStatusReq;
import com.green.attaparunever2.company.model.CompanyStatusRes;
import com.green.attaparunever2.company.model.SignUpEmployeeReq;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/user/company")
@Tag(name="회사 가입정보", description = "가입한 회사정보관련 API")
public class CompanyController {
    private final CompanyService companyService;

    @PostMapping("status")
    @Operation(summary = "입력한 사업자번호에 대한 일치여부 확인")
    public ResultResponse<CompanyStatusRes> status(@ModelAttribute CompanyStatusReq req) {
        CompanyStatusRes result = companyService.status(req);

        return ResultResponse.<CompanyStatusRes>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("사업자등록 상태조회 성공")
                .resultData(result)
                .build();
    }

    @PostMapping("v3/employee/sign-up")
    @Operation(summary = "사원 계정 생성")
    public ResultResponse<Integer> postEmployee(@RequestBody SignUpEmployeeReq req) {
        int result = companyService.postEmployee(req);

        return ResultResponse.<Integer>builder()
                .statusCode("200")
                .resultMsg("사원 계정 생성 성공")
                .resultData(result)
                .build();
    }


}
