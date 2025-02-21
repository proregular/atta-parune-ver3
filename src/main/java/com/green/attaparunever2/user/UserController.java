package com.green.attaparunever2.user;

import com.green.attaparunever2.admin.model.AdminFindPasswordReq;
import com.green.attaparunever2.common.model.ResultResponse;
import com.green.attaparunever2.entity.User;
import com.green.attaparunever2.user.model.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/user")
@Tag(name="유저", description = "유저 관련 API")
public class UserController {
    private final UserService userService;

    @PostMapping("sign-up")
    @Operation(summary = "회원가입")
    public ResultResponse<?> signUp(@RequestBody UserSignUpReq req) {
        int result = userService.signUp(req);

        return ResultResponse.<Integer>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("회원가입에 성공하였습니다.")
                .resultData(result)
                .build();
    }

    @GetMapping
    @Operation(summary = "회원 정보 조회")
    public ResultResponse<?> getUser(@ModelAttribute UserGetReq req) {
        UserGetRes result = userService.getUser(req);

        return ResultResponse.<UserGetRes>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("회원 정보 조회 성공")
                .resultData(result)
                .build();
    }

    @GetMapping("auth-token")
    @Operation(summary = "인증번호 인증")
    public ResultResponse<?> authToken(@ModelAttribute AuthTokenReq req) {
        int result = userService.authToken(req);

        return ResultResponse.<Integer>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("메일 인증에 성공했습니다.")
                .resultData(result)
                .build();
    }

    @PostMapping("sign-in")
    @Operation(summary = "로그인")
    public ResultResponse<?> signIn(@RequestBody UserSignInReq p, HttpServletResponse response) {
        UserSignInRes userSignInRes = userService.signIn(p, response);

        return ResultResponse.<UserSignInRes>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("로그인 성공")
                .resultData(userSignInRes)
                .build();
    }

    @DeleteMapping
    @Operation(summary = "사용자 삭제")
    public ResultResponse<Integer> delUser(@ModelAttribute UserDelReq p) {
        int result = userService.delUser(p);

        return ResultResponse.<Integer>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("회원 삭제 완료")
                .resultData(result)
                .build();
    }

    @GetMapping("find-id")
    @Operation(summary = "아이디 찾기")
    public ResultResponse<Integer> findId(@ModelAttribute UserFindIdReq p) {
        int result = userService.findId(p);

        return ResultResponse.<Integer>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("아이디 찾기 이메일 전송 완료")
                .resultData(result)
                .build();
    }

    @GetMapping("access-token")
    @Operation(summary = "엑세스 토큰 재발행")
    public String getAccessToken(HttpServletRequest req) {
        return userService.getAccessToken(req);
    }

    @GetMapping("activeOrderCheck")
    @Operation(summary = "진행중인 주문 내역 확인")
    public ResultResponse<List<SelUserOrderPastCheckRes>> getUserActiveOrderCheck(SelUserOrderPastCheckReq p) {
        List<SelUserOrderPastCheckRes> resList = userService.getUserActiveOrderCheck(p);

        return ResultResponse.<List<SelUserOrderPastCheckRes>>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("진행 주문 내역 확인")
                .resultData(resList)
                .build();

    }

    @GetMapping("pastOrderCheck")
    @Operation(summary = "지난 주문 내역 확인")
    public ResultResponse<List<SelUserOrderPastCheckRes>> getUserPastOrderCheck(SelUserOrderPastCheckReq p) {
        List<SelUserOrderPastCheckRes> resList = userService.getUserPastOrderCheck(p);

        return ResultResponse.<List<SelUserOrderPastCheckRes>>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("지난 결제 내역 확인")
                .resultData(resList)
                .build();

    }

    @GetMapping("order")
    @Operation(summary = "로그인한 사용자 본인의 진행중인 주문 조회")
    public ResultResponse<GetUserOrderVer2Res> getUserOrder(@ParameterObject GetUserOrderVer2Req p) {
        GetUserOrderVer2Res res = userService.getUserOrder(p);

        return ResultResponse.<GetUserOrderVer2Res>builder()
                .statusCode("200")
                .resultMsg("주문 조회 완료")
                .resultData(res)
                .build();
    }

    @PutMapping("/upw")
    @Operation(summary = "비밀번호 변경")
    public ResultResponse<Integer> patchUpw(@Valid @RequestBody UserUpwPatchReq p) {
        int res = userService.patchUpw(p);
        return ResultResponse.<Integer>builder()
                .statusCode("200")
                .resultMsg("비밀번호 변경이 완료되었습니다.")
                .resultData(res)
                .build();
    }

    @GetMapping("orderId")
    @Operation(summary = "userId로 최신 orderId 주기")
    public ResultResponse<Long> getSignedUserGetOrder(long userId){
        long res = userService.getSignedUserGetOrder(userId);

        return ResultResponse.<Long>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("오더 PK 받기")
                .resultData(res)
                .build();
    }

    @GetMapping("alert")
    @Operation(summary = "메인 페이지 사용자 알람 데이터")
    public ResultResponse<List<UserAlertDto>> getUserAlert(@Valid @RequestParam long userId) {
        List<UserAlertDto> res = userService.getUserAlert(userId);
        return ResultResponse.<List<UserAlertDto>>builder()
                .statusCode("200")
                .resultMsg("알람 조회가 완료되었습니다.")
                .resultData(res)
                .build();
    }
    @PutMapping("/find-passowrd")
    @Operation(summary = "비밀번호 찾기")
    public ResultResponse<Integer> findPassword(@Valid @RequestBody UserFindPasswordReq p) {
        int result = userService.findPassword(p);
        return ResultResponse.<Integer>builder()
                .statusCode("200")
                .resultMsg("비밀번호 찾기가 완료 되었습니다.")
                .resultData(result)
                .build();
    }

    // 회원 정보 수정
    @PutMapping("v3/userInfo")
    @Operation(summary = "회원 정보 수정", description = "닉네임, 핸드폰 번호, 프로필 사진 등록 및 수정")
    public ResultResponse<User> updateUser(@RequestParam(value = "nickName", required = false) String nickName,
                                           @RequestParam("phone") String phone,
                                           @RequestParam(value = "userPic", required = false) MultipartFile userPic) {

        if (phone == null || phone.trim().isEmpty()) {
            throw new IllegalArgumentException("핸드폰 번호는 필수입니다.");
        }

        UserUpdateInfoReq req = new UserUpdateInfoReq();
        req.setNickName(nickName);
        req.setPhone(phone);

        User updatedUser = userService.updateUserInfo(req, userPic);
        return ResultResponse.<User>builder()
                .statusCode("200")
                .resultMsg("회원 정보 등록 완료")
                .resultData(updatedUser)
                .build();
    }
}
