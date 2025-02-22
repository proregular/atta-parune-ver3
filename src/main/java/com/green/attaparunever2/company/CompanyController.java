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
    public ResultResponse<Integer> postEmployee(@RequestBody SignUpEmployeeReq req) {
        int result = companyService.postEmployee(req);

        return ResultResponse.<Integer>builder()
                .statusCode("200")
                .resultMsg("사원 계정 생성 성공")
                .resultData(result)
                .build();
    }

    @GetMapping("v3/employee")
    @Operation(summary = "사원 정보 조회")
    public ResultResponse<List<GetEmployeeRes>> getEmployee(@ParameterObject GetEmployeeReq req) {
        List<GetEmployeeRes> list = companyService.getEmployee(req);

        return ResultResponse.<List<GetEmployeeRes>>builder()
                .statusCode("200")
                .resultMsg("사원 정보 조회 성공")
                .resultData(list)
                .build();
    }

    @PatchMapping("v3")
    @Operation(summary = "회사 정보 수정")
    public ResultResponse<Integer> patchCompany(@RequestBody UpdCompanyReq req) {
        int result = companyService.patchCompany(req);

        return ResultResponse.<Integer>builder()
                .statusCode("200")
                .resultMsg("회사 정보 수정 완료")
                .resultData(result)
                .build();
    }

    @PatchMapping("v3/employee/point/collect")
    @Operation(summary = "사원 포인트 회수")
    public ResultResponse<Integer> patchEmployeePointCollect(@RequestBody UpdEmployeePointCollectReq req) {
        int result = companyService.patchEmployeePointCollect(req);

        return ResultResponse.<Integer>builder()
                .statusCode("200")
                .resultMsg("사원 포인트 회수 성공")
                .resultData(result)
                .build();
    }

    @PatchMapping("v3/employee")
    @Operation(summary = "사원 상태 변경")
    public ResultResponse<Integer> patchEmployee(@RequestBody UpdEmployeeReq req) {
        int result = companyService.patchEmployee(req);

        return ResultResponse.<Integer>builder()
                .statusCode("200")
                .resultMsg("사원 상태 변경 성공")
                .resultData(result)
                .build();
    }

    @PostMapping("v3/refund")
    @Operation(summary = "환불 요청")
    public ResultResponse<Integer> postRefund(@RequestBody InsRefundReq req) {
        int result = companyService.postRefund(req);

        return ResultResponse.<Integer>builder()
                .statusCode("200")
                .resultMsg("환불 요청 완료")
                .resultData(result)
                .build();
    }
}
