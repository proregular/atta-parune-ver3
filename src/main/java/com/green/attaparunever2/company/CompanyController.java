package com.green.attaparunever2.company;

import com.green.attaparunever2.common.model.ResultResponse;
import com.green.attaparunever2.company.model.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("company")
@Tag(name="회사", description = "가입한 회사정보관련 API")
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

    @PostMapping("v3/employee")
    @Operation(summary = "사원 계정 생성")
    public ResultResponse<Integer> postEmployee(@Valid @RequestBody SignUpEmployeeReq req) {
        int result = companyService.postEmployee(req);

        return ResultResponse.<Integer>builder()
                .statusCode("200")
                .resultMsg("사원 계정 생성 성공")
                .resultData(result)
                .build();
    }

    @GetMapping("v3/employee")
    @Operation(summary = "사원 정보 조회")
    public ResultResponse<List<GetEmployeeRes>> getEmployee(@Valid @ParameterObject GetEmployeeReq req) {
        List<GetEmployeeRes> list = companyService.getEmployee(req);

        return ResultResponse.<List<GetEmployeeRes>>builder()
                .statusCode("200")
                .resultMsg("사원 정보 조회 성공")
                .resultData(list)
                .build();
    }

}
