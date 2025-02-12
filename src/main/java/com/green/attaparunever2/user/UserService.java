package com.green.attaparunever2.user;

import com.green.attaparunever2.admin.model.AdminFindPasswordReq;
import com.green.attaparunever2.admin.model.AdminSignInRes;
import com.green.attaparunever2.admin.model.AdminUpwPatchReq;
import com.green.attaparunever2.common.DateTimeUtils;
import com.green.attaparunever2.common.PasswordGenerator;
import com.green.attaparunever2.common.excprion.CustomException;
import com.green.attaparunever2.config.CookieUtils;
import com.green.attaparunever2.config.constant.JwtConst;
import com.green.attaparunever2.config.jwt.JwtTokenProvider;
import com.green.attaparunever2.config.jwt.JwtUser;
import com.green.attaparunever2.config.security.AuthenticationFacade;
import com.green.attaparunever2.user.model.*;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserService {
    private final MailSendService mailSendService;
    private final UserMapper userMapper;
    private final JwtTokenProvider jwtTokenProvider;
    private final CookieUtils cookieUtils;
    private final JwtConst jwtConst;
    private final AuthenticationFacade authenticationFacade;

    // 회원가입
    @Transactional
    public int signUp(UserSignUpReq req) {
        // 인증정보 조회(만약 인증이 만료된 아이디로 가입하려는 경우 인증 정보를 지우고 유저 정보도 지워야 함)
        UserMailVerificationDTO userMailVerificationDTO = userMapper.selUserEmailVerificationByUId(req.getUid());

        if(userMailVerificationDTO != null) {
            LocalDateTime now = LocalDateTime.now();

            // 인증 기간이 만료되었다면 인증, 회원정보 삭제
            if (now.isAfter(DateTimeUtils.convertToLocalDateTime(userMailVerificationDTO.getExpiredDate()))) {
                userMapper.delUserEmailVerification(userMailVerificationDTO.getUserId());
                userMapper.delUser(userMailVerificationDTO.getUserId());
            }
        }

        // 비밀번호 암호화
        req.setUpw(BCrypt.hashpw(req.getUpw(), BCrypt.gensalt()));

        // 회원 생성
        int result =  userMapper.insUser(req);

        /*if(result != 0) {
            // 인증번호 생성
            String authKey = mailSendService.generateAuthCode(10);

            // 인증번호 저장
            userMailVerificationDTO = new UserMailVerificationDTO();
            userMailVerificationDTO.setUserId(req.getUserId());
            userMailVerificationDTO.setToken(authKey);

            result = userMapper.insUserEmailVerification(userMailVerificationDTO);

            if(result == 0) {
                throw new CustomException("회원가입에 실패 했습니다.", HttpStatus.BAD_REQUEST);
            }

            // 인증번호 이메일 전송
            mailSendService.sendAuthMail("/user/auth-token?userId=", req.getEmail(), req.getUserId(), userMailVerificationDTO.getToken());
        }*/

        return result;
    }

    // 회원정보 조회
    public UserGetRes getUser(UserGetReq p) {
        UserGetRes res = userMapper.selUserByUserId(p.getUserId());

        if(res == null) {
            throw new CustomException("회원정보를 불러올 수 없습니다.", HttpStatus.BAD_REQUEST);
        }

        return res;
    }

    // 회원삭제
    @Transactional
    public int delUser(UserDelReq p) {
        int result = userMapper.delUser(p.getUserId());

        if(result == 0) {
            throw new CustomException("회원삭제에 실패 했습니다.", HttpStatus.BAD_REQUEST);
        }

        return result;
    }

    // 인증처리
    @Transactional
    public int authToken(AuthTokenReq p) {
        UserMailVerificationDTO userMailVerificationDTO = userMapper.selUserEmailVerificationByUserId(p.getUserId());

        if(userMailVerificationDTO == null) {
            throw new CustomException("인증 정보가 존재하지 않습니다.", HttpStatus.BAD_REQUEST);
        } else {
            LocalDateTime now = LocalDateTime.now();

            if (now.isAfter(DateTimeUtils.convertToLocalDateTime(userMailVerificationDTO.getExpiredDate()))) {
                throw new CustomException("인증기간이 만료 되었습니다. 재가입 해주세요.", HttpStatus.BAD_REQUEST);
            } else {
                if(!(userMailVerificationDTO.getToken().equals(p.getToken()))) {
                    throw new CustomException("인증번호가 일치하지 않습니다.", HttpStatus.BAD_REQUEST);
                }
            }
        }

        return userMapper.delUserEmailVerification(p.getUserId());
    }

    // 로그인
    @Transactional
    public UserSignInRes signIn(UserSignInReq p, HttpServletResponse response) {
        UserSignInRes res = userMapper.selUserByUid(p.getId());

        if(res == null || !BCrypt.checkpw(p.getPw(),res.getUpw())) {
            throw new CustomException("아이디 혹은 비밀번호를 확인해 주세요.", HttpStatus.BAD_REQUEST);
        } else {
            // 인증 여부 검사
            /*UserMailVerificationDTO userMailVerificationDTO = userMapper.selUserEmailVerificationByUserId(res.getUserId());
            LocalDateTime now = LocalDateTime.now();

            if(userMailVerificationDTO != null) {
                String msg = "인증이 완료되지 않았습니다.";

                if (now.isAfter(DateTimeUtils.convertToLocalDateTime(userMailVerificationDTO.getExpiredDate()))){
                    msg = "인증기간이 만료 되었습니다. 재가입 해주세요.";
                }

                throw new CustomException(msg, HttpStatus.BAD_REQUEST);
            }*/

            // AT, RT
            JwtUser jwtUser = new JwtUser();

            jwtUser.setSignedUserId(res.getUserId());
            jwtUser.setRoles(res.getRoleId());

            String accessToken = jwtTokenProvider.generateToken(jwtUser, jwtConst.getAccessTokenExpiry());
            String refreshToken = jwtTokenProvider.generateToken(jwtUser, jwtConst.getRefreshTokenExpiry());

            //RT를 쿠키에 담는다.
            cookieUtils.setCookie(response, jwtConst.getRefreshTokenCookieName(), refreshToken, jwtConst.getRefreshTokenCookieExpiry());
            res.setAccessToken(accessToken);
        }

        return res;
    }

    // 아이디 찾기
    public int findId(UserFindIdReq p) {
        // 이메일이 존재하는지
        UserDTO userDTO = userMapper.selUserByEmailAndName(p);

        if(userDTO == null) {
            throw new CustomException("이메일이 존재하지 않습니다.", HttpStatus.BAD_REQUEST);
        } else {
            // 인증번호 이메일 전송
            mailSendService.sendFindIdMail(p.getEmail(), userDTO.getUid());
        }

        return 1;
    }

    public String getAccessToken(HttpServletRequest req) {
        Cookie cookie = cookieUtils.getCookie(req, jwtConst.getRefreshTokenCookieName());
        String refreshToken = cookie.getValue();
        log.info("refreshToken: {}", refreshToken);

        JwtUser jwtUser = jwtTokenProvider.getUser(refreshToken);
        String accessToken = jwtTokenProvider.generateToken(jwtUser, jwtConst.getAccessTokenExpiry());

        return accessToken;
    }

    public List<SelUserOrderPastCheckRes> getUserPastOrderCheck(SelUserOrderPastCheckReq p){
        List<SelUserOrderPastCheckRes> res = userMapper.selUserPastOrderCheck(p);

        return res;
    }

    public List<SelUserOrderPastCheckRes> getUserActiveOrderCheck(SelUserOrderPastCheckReq p){
        List<SelUserOrderPastCheckRes> res = userMapper.selUserActiveOrderCheck(p);

        return res;
    }

    public GetUserOrderVer2Res getUserOrder(GetUserOrderVer2Req p) {
        p.setSignedUserId(authenticationFacade.getSignedUserId());
        GetUserOrderVer2Res res =  userMapper.getUserOrderVer2(p);
        List<GetUserOrderMenuListDto> list = userMapper.getUserOrderVer2MenuList(p);

        res.setMenuList(list);

        return res;
    }

    // 비밀번호 변경
    @Transactional
    public int patchUpw(UserUpwPatchReq p) {
        p.setUserId(authenticationFacade.getSignedUserId());

        // 신규 비밀번호 유효성 검사
        if (p.getNewUpw() == null || !p.getNewUpw().matches("^(?=.*[0-9])(?=.*[!@#$%^&*()-_=+\\\\\\\\|\\\\[{\\\\]};:'\\\",<.>/?]).{8,}$")) {
            throw new CustomException("비밀번호는 특수문자와 숫자를 포함한 8자 이상이어야 합니다.", HttpStatus.BAD_REQUEST);
        }

        // 비밀번호 해싱
        String hashedPassWord = BCrypt.hashpw(p.getNewUpw(), BCrypt.gensalt());
        p.setNewUpw(hashedPassWord);

        // 비밀번호 변경
        int result = userMapper.patchUpw(p);
        return result;
    }

    public long getSignedUserGetOrder(long userId){
        long result = userMapper.getSignedUserGetOrder(userId);

        return result;
    }

    // 사용자 메인 페이지 알림
    public List<UserAlertDto> getUserAlert(long userId) {
        List<UserAlertDto> reservationList = userMapper.selUserReservationAlertByUserId(userId);
        List<UserAlertDto> paymentList = userMapper.selUserPaymentAlertByUserId(userId);

        reservationList.addAll(paymentList);

        return reservationList;
    }

    // 비밀번호 찾기
    @Transactional
    public int findPassword(UserFindPasswordReq p) {
        // 관리자 aid, 이메일 일치여부 확인
        UserSignInRes userData = userMapper.selUserByUid(p.getUid());
        int result = 0;

        if(userData != null && userData.getEmail().equals(p.getEmail())) {
            // 일치한다면 렌덤한 문자열을 생성후  DB에 저장
            String newPassword = PasswordGenerator.generateRandomPassword(8);

            // 비밀번호 암호화
            String hashedPassword = BCrypt.hashpw(newPassword, BCrypt.gensalt());

            UserUpwPatchReq patchReq = new UserUpwPatchReq();

            patchReq.setNewUpw(hashedPassword);
            patchReq.setUserId(userData.getUserId());

            result = userMapper.patchUpw(patchReq);

            if(result == 0) {
                throw new CustomException("비밀번호 변경에 실패하였습니다.", HttpStatus.BAD_REQUEST);
            } else {
                // 변경된 비밀번호 이메일 전송
                mailSendService.sendFindPasswordMail(userData.getEmail(), newPassword);
            }
        } else {
            throw new CustomException("아이디 혹은 이메일이 일치하지 않습니다.", HttpStatus.BAD_REQUEST);
        }

        return result;
    }

}
