package com.green.attaparunever2.admin;

import com.green.attaparunever2.admin.model.AdminSignUpReq;
import com.green.attaparunever2.common.DateTimeUtils;
import com.green.attaparunever2.common.PasswordGenerator;
import com.green.attaparunever2.common.excprion.CustomException;
import com.green.attaparunever2.admin.model.*;
import com.green.attaparunever2.config.CookieUtils;
import com.green.attaparunever2.config.constant.JwtConst;
import com.green.attaparunever2.config.jwt.JwtTokenProvider;
import com.green.attaparunever2.config.jwt.JwtUser;
import com.green.attaparunever2.config.security.AuthenticationFacade;
import com.green.attaparunever2.user.MailSendService;
import com.green.attaparunever2.admin.model.AdminMailVerificationDTO;
import com.green.attaparunever2.user.MailSendService;
import com.green.attaparunever2.user.model.UserGetReq;
import com.green.attaparunever2.user.model.UserGetRes;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@Slf4j
@RequiredArgsConstructor
public class AdminService {
    private final AdminMapper adminMapper;
    private final MailSendService mailSendService;
    private final JwtTokenProvider jwtTokenProvider;
    private final CookieUtils cookieUtils;
    private final JwtConst jwtConst;
    private final AuthenticationFacade authenticationFacade;

    // 관리자 회원가입
    @Transactional
    public int adminSignUp(AdminSignUpReq req){
        // 인증정보 조회(만약 인증이 만료된 아이디로 가입하려는 경우 인증 정보를 지우고 유저 정보도 지워야 함)
        /*AdminMailVerificationDTO adminMailVerificationDTO = adminMapper.selAdminEmailVerificationByAId(req.getAid());

        if(adminMailVerificationDTO != null) {
            LocalDateTime now = LocalDateTime.now();

            // 인증 기간이 만료되었다면 인증, 회원정보 삭제
            if (now.isAfter(DateTimeUtils.convertToLocalDateTime(adminMailVerificationDTO.getExpiredDate()))) {
                adminMapper.delAdminEmailVerification(adminMailVerificationDTO.getAdminId());
                adminMapper.delAdmin(adminMailVerificationDTO.getAdminId());
            }
        }*/

        // 비밀번호 암호화
        req.setApw(BCrypt.hashpw(req.getApw(), BCrypt.gensalt()));
        
        int result = adminMapper.insAdmin(req);

        /*if(result != 0) {
            // 인증번호 생성
            String authKey = mailSendService.generateAuthCode(10);

            // 인증번호 저장
            adminMailVerificationDTO = new AdminMailVerificationDTO();
            adminMailVerificationDTO.setAdminId(req.getAdminId());
            adminMailVerificationDTO.setToken(authKey);

            result = adminMapper.insAdminEmailVerification(adminMailVerificationDTO);

            if(result == 0) {
                throw new CustomException("관리자 가입에 실패 했습니다.", HttpStatus.BAD_REQUEST);
            }

            // 인증번호 이메일 전송
            mailSendService.sendAuthMail("/admin/auth-token?adminId=", req.getEmail(), req.getAdminId(), adminMailVerificationDTO.getToken());
        }*/

        // 관리자 식당등록 링크 이메일 전송(나중에 삭제할 예정 인증시에 보내야 함)
        mailSendService.sendAddStoreMail(req.getEmail(), req.getAdminId());
        
        return result;
    }

    // 관리자 정보 조회
    public AdminGetRes getAdmin(AdminGetReq p) {
        AdminGetRes res = adminMapper.selAdminByAdminId(p.getAdminId());

        if(res == null) {
            throw new CustomException("관리자 정보를 불러올 수 없습니다.", HttpStatus.BAD_REQUEST);
        }

        return res;
    }

    // 관리자삭제
    @Transactional
    public int delAdmin(AdminDelReq p) {
        int result = adminMapper.delAdmin(p.getAdminId());

        if(result == 0) {
            throw new CustomException("관리자 삭제에 실패 했습니다.", HttpStatus.BAD_REQUEST);
        }

        return result;
    }

    // 인증처리
    @Transactional
    public int authToken(AuthTokenReq p) {
        AdminMailVerificationDTO adminMailVerificationDTO = adminMapper.selAdminEmailVerificationByAdminId(p.getAdminId());

        if(adminMailVerificationDTO == null) {
            throw new CustomException("인증 정보가 존재하지 않습니다.", HttpStatus.BAD_REQUEST);
        } else {
            LocalDateTime now = LocalDateTime.now();

            if (now.isAfter(DateTimeUtils.convertToLocalDateTime(adminMailVerificationDTO.getExpiredDate()))) {
                throw new CustomException("인증기간이 만료 되었습니다. 재가입 해주세요.", HttpStatus.BAD_REQUEST);
            } else {
                if(!(adminMailVerificationDTO.getToken().equals(p.getToken()))) {
                    throw new CustomException("인증번호가 일치하지 않습니다.", HttpStatus.BAD_REQUEST);
                }
            }
        }

        AdminGetRes adminRes = adminMapper.selAdminByAdminId(p.getAdminId());

        // 관리자 식당등록 링크 이메일 전송
        mailSendService.sendAddStoreMail(adminRes.getEmail(), adminRes.getAdminId());

        return adminMapper.delAdminEmailVerification(p.getAdminId());
    }

    // 로그인
    @Transactional
    public AdminSignInRes signIn(AdminSignInReq p, HttpServletResponse response) {
        AdminSignInRes res = adminMapper.selAdminByAid(p.getId());

        if(res == null || !BCrypt.checkpw(p.getPw(),res.getApw())) {
            throw new CustomException("아이디 혹은 비밀번호를 확인해 주세요.", HttpStatus.BAD_REQUEST);
        } else {
            /*// 인증 여부 검사
            AdminMailVerificationDTO adminMailVerificationDTO = adminMapper.selAdminEmailVerificationByAdminId(res.getAdminId());
            LocalDateTime now = LocalDateTime.now();

            if(adminMailVerificationDTO != null) {
                String msg = "인증이 완료되지 않았습니다.";

                if (now.isAfter(DateTimeUtils.convertToLocalDateTime(adminMailVerificationDTO.getExpiredDate()))){
                    msg = "인증기간이 만료 되었습니다. 재가입 해주세요.";
                }

                throw new CustomException(msg, HttpStatus.BAD_REQUEST);
            }*/

            // AT, RT
            JwtUser jwtUser = new JwtUser();

            jwtUser.setSignedUserId(res.getAdminId());
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
    public int findId(AdminFindIdReq p) {
        // 이메일이 존재하는지
        AdminDTO adminDTO = adminMapper.selAdminByEmailAndName(p);

        if(adminDTO == null) {
            throw new CustomException("이메일이 존재하지 않습니다.", HttpStatus.BAD_REQUEST);
        } else {
            // 인증번호 이메일 전송
            mailSendService.sendFindIdMail(p.getEmail(), adminDTO.getAid());
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

    // 비밀번호 변경
    @Transactional
    public int patchUpw(AdminUpwPatchReq p) {
        p.setAdminId(authenticationFacade.getSignedUserId());

        if (p.getNewUpw() == null || !p.getNewUpw().matches("^(?=.*[0-9])(?=.*[!@#$%^&*()-_=+\\\\\\\\|\\\\[{\\\\]};:'\\\",<.>/?]).{8,}$")) {
            throw new CustomException("비밀번호는 특수문자와 숫자를 포함한 8자 이상이어야 합니다.", HttpStatus.BAD_REQUEST);
        }

        String hashedPassWord = BCrypt.hashpw(p.getNewUpw(), BCrypt.gensalt());
        p.setNewUpw(hashedPassWord);

        int result = adminMapper.patchUpw(p);
        return result;
    }

    // 비밀번호 찾기
    @Transactional
    public int findPassword(AdminFindPasswordReq p) {
        // 관리자 aid, 이메일 일치여부 확인
        AdminSignInRes adminData = adminMapper.selAdminByAid(p.getAid());
        int result = 0;

        if(adminData != null && adminData.getEmail().equals(p.getEmail())) {
            // 일치한다면 렌덤한 문자열을 생성후  DB에 저장
            String newPassword = PasswordGenerator.generateRandomPassword(8);

            // 비밀번호 암호화
            String hashedPassword = BCrypt.hashpw(newPassword, BCrypt.gensalt());

            AdminUpwPatchReq patchReq = new AdminUpwPatchReq();

            patchReq.setNewUpw(hashedPassword);
            patchReq.setAdminId(adminData.getAdminId());

            result = adminMapper.patchUpw(patchReq);

            if(result == 0) {
                throw new CustomException("비밀번호 변경에 실패하였습니다.", HttpStatus.BAD_REQUEST);
            } else {
                // 변경된 비밀번호 이메일 전송
                mailSendService.sendFindPasswordMail(adminData.getEmail(), newPassword);
            }
        } else {
            throw new CustomException("아이디 혹은 이메일이 일치하지 않습니다.", HttpStatus.BAD_REQUEST);
        }

        return result;
    }
}
