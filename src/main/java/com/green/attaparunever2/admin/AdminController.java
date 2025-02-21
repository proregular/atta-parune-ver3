package com.green.attaparunever2.admin;

import com.green.attaparunever2.admin.model.AdminSignUpReq;
import com.green.attaparunever2.common.model.ResultResponse;
import com.green.attaparunever2.admin.model.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("admin")
@Tag(name="관리자", description = "관리자 관련 API")
public class AdminController {
    private final AdminService adminService;

    @PostMapping("sign-up")
    @Operation(summary = "관리자 가입")
    ResultResponse<Integer> adminSignUp(@RequestBody AdminSignUpReq p){
        int result = adminService.adminSignUp(p);
        return ResultResponse.<Integer>builder()
                .statusCode("200")
                .resultMsg("관리자가입 완료")
                .resultData(result)
                .build();
    }

    @GetMapping
    @Operation(summary = "관리자 정보 조회")
    public ResultResponse<?> getUser(@ModelAttribute AdminGetReq req) {
        AdminGetRes result = adminService.getAdmin(req);

        return ResultResponse.<AdminGetRes>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("관리자 정보 조회 성공")
                .resultData(result)
                .build();
    }

    @GetMapping("auth-token")
    @Operation(summary = "인증번호 인증")
    public ResultResponse<?> authToken(@ModelAttribute AuthTokenReq req) {
        int result = adminService.authToken(req);

        return ResultResponse.<Integer>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("메일 인증에 성공했습니다.")
                .resultData(result)
                .build();
    }

    @PostMapping("sign-in")
    @Operation(summary = "로그인")
    public ResultResponse<?> signIn(@RequestBody AdminSignInReq p, HttpServletResponse response) {
        AdminSignInRes adminSignInRes = adminService.signIn(p, response);

        return ResultResponse.<AdminSignInRes>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("로그인 성공")
                .resultData(adminSignInRes)
                .build();
    }

    @PostMapping("v3/sign-in")
    @Operation(summary = "관리자 로그인")
    public ResultResponse<?> signInAdmin(@RequestBody SignInAdminReq p, HttpServletResponse response) {
        SignInAdminRes res = adminService.signInAdmin(p, response);

        return ResultResponse.<SignInAdminRes>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("로그인 성공")
                .resultData(res)
                .build();
    }

    @DeleteMapping
    @Operation(summary = "관리자 삭제")
    public ResultResponse<Integer> delAdmin(@ModelAttribute AdminDelReq p) {
        int result = adminService.delAdmin(p);

        return ResultResponse.<Integer>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("관리자 삭제 완료")
                .resultData(result)
                .build();
    }

    @GetMapping("find-id")
    @Operation(summary = "아이디 찾기")
    public ResultResponse<Integer> findId(@ModelAttribute AdminFindIdReq p) {
        int result = adminService.findId(p);

        return ResultResponse.<Integer>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("아이디 찾기 이메일 전송 완료")
                .resultData(result)
                .build();
    }

    @GetMapping("access-token")
    @Operation(summary = "엑세스 토큰 재발행")
    public String getAccessToken(HttpServletRequest req) {
        return adminService.getAccessToken(req);
    }

    @PutMapping("/upw")
    @Operation(summary = "비밀번호 변경")
    public ResultResponse<Integer> patchUpw(@Valid @RequestBody AdminUpwPatchReq p) {
        int result = adminService.patchUpw(p);
        return ResultResponse.<Integer>builder()
                .statusCode("200")
                .resultMsg("비밀번호 변경이 완료되었습니다.")
                .resultData(result)
                .build();
    }

    @PutMapping("/find-passowrd")
    @Operation(summary = "비밀번호 찾기")
    public ResultResponse<Integer> findPassword(@Valid @RequestBody AdminFindPasswordReq p) {
        int result = adminService.findPassword(p);
        return ResultResponse.<Integer>builder()
                .statusCode("200")
                .resultMsg("비밀번호 찾기가 완료 되었습니다.")
                .resultData(result)
                .build();
    }

    @GetMapping("v3/CompanyPayment")
    @Operation(summary = "회사 포인트 판매 내역 조회")
    public ResultResponse<List<getCompanyPaymentRes>> getCompanyPayment(){
        List<getCompanyPaymentRes> res = adminService.getCompanyPayment();

        return ResultResponse.<List<getCompanyPaymentRes>>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("회사 포인트 판매 내역조회")
                .resultData(res)
                .build();
    }

    @PostMapping("v3/signUpAdmin")
    @Operation(summary = "시스템 관리자 회원가입")
    public ResultResponse<Integer> signUpAdmin(@RequestBody SignAdminReq p) {
        int result = adminService.SignUpAdmin(p);

        return ResultResponse.<Integer>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("시스템 관리자 회원가입 완료")
                .resultData(result)
                .build();
    }

    @GetMapping("v3/Refund")
    @Operation(summary = "환불 내역 조회")
    public ResultResponse<List<SelRefundRes>> getRefund(){
        List<SelRefundRes> res = adminService.getRefund();

        return ResultResponse.<List<SelRefundRes>>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("환불 내역 조회 완료")
                .resultData(res)
                .build();
    }

    @GetMapping("v3/companyEnrollment")
    @Operation(summary = "회사 제휴신청서 보기")
    public ResultResponse<List<SelCompanyEnrollmentRes>> getCompanyEnrollment(){
        List<SelCompanyEnrollmentRes> res = adminService.getCompanyEnrollment();

        return ResultResponse.<List<SelCompanyEnrollmentRes>>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("회사 제휴신청서 보기 완료")
                .resultData(res)
                .build();
    }

    @GetMapping("v3/restaurantEnrollment")
    @Operation(summary = "식당 입점신청서 보기")
    public ResultResponse<List<SelRestaurantEnrollmentRes>> getRestaurantEnrollment(){
        List<SelRestaurantEnrollmentRes> res = adminService.getRestaurantEnrollment();

        return ResultResponse.<List<SelRestaurantEnrollmentRes>>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("식당 입점신청서 보기 완료")
                .resultData(res)
                .build();
    }

    @GetMapping("v3/SystemPost")
    @Operation(summary = "게시글 자세히 보기")
    public ResultResponse<SelOneSystemPostRes> getSelOneSystemPost(long inquiryId){
        SelOneSystemPostRes res = adminService.getOneSystemPost(inquiryId);

        return ResultResponse.<SelOneSystemPostRes>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("게시글 자세히 보기 완료")
                .resultData(res)
                .build();

    }

    @PostMapping("v3/restaurantEnrollment")
    @Operation(summary = "식당 입점 신청서 작성")
    public ResultResponse<Integer> postRestaurantEnrollment(InsRestaurantEnrollmentReq req){
        int result = adminService.postRestaurantEnrollment(req);

        return ResultResponse.<Integer>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("식당 입점 신청서 등록 완료")
                .resultData(result)
                .build();
    }
    
    @PostMapping("v3/CompanyEnrollment")
    @Operation(summary = "회사 제휴 신청서 등록")
    public ResultResponse<Integer> postCompanyEnrollment(InsCompanyEnrollmentReq req){
        int result = adminService.postCompanyEnrollment(req);

        return ResultResponse.<Integer>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("회사 제휴 신청서 등록 완료")
                .resultData(result)
                .build();
    }

    @PutMapping("v3/admin")
    @Operation(summary = "식당, 회사 회원가입")
    public ResultResponse<Integer> updAdmin(SignUpAdminReq req){
        int result = adminService.updAdmin(req);

        log.info("@@@@@@@@@@@@@@@@@req : {}", req);
        return ResultResponse.<Integer>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("회원가입 완료")
                .resultData(result)
                .build();
    }
}
