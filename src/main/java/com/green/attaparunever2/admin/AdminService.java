package com.green.attaparunever2.admin;

import com.green.attaparunever2.admin.model.AdminSignUpReq;
import com.green.attaparunever2.common.DateTimeUtils;
import com.green.attaparunever2.common.MyFileUtils;
import com.green.attaparunever2.common.PasswordGenerator;
import com.green.attaparunever2.common.excprion.CustomException;
import com.green.attaparunever2.admin.model.*;
import com.green.attaparunever2.common.repository.CodeRepository;
import com.green.attaparunever2.company.CompanyRepository;
import com.green.attaparunever2.config.CookieUtils;
import com.green.attaparunever2.config.constant.JwtConst;
import com.green.attaparunever2.config.jwt.JwtTokenProvider;
import com.green.attaparunever2.config.jwt.JwtUser;
import com.green.attaparunever2.config.security.AuthenticationFacade;
import com.green.attaparunever2.entity.*;
import com.green.attaparunever2.restaurant.RestaurantCategoryRepository;
import com.green.attaparunever2.restaurant.RestaurantRepository;
import com.green.attaparunever2.user.MailSendService;
import com.green.attaparunever2.admin.model.AdminMailVerificationDTO;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

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
    private final AdminRepository adminRepository;
    private final CodeRepository codeRepository;
    private final CompanyRepository companyRepository;
    private final RestaurantRepository restaurantRepository;
    private final RestaurantCategoryRepository restaurantCategoryRepository;
    private final MyFileUtils myFileUtils;
    private final SystemPostRepository systemPostRepository;

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

    //시스템관리자 로그인
    @Transactional
    public SignInAdminRes signInAdmin(SignInAdminReq p, HttpServletResponse response) {
        SignInAdminRes res = adminMapper.signInAdminByAid(p.getAid());

        if(res == null || !BCrypt.checkpw(p.getApw(), res.getApw())) {
            throw new CustomException("아이디 혹은 비밀번호를 확인해 주세요.", HttpStatus.BAD_REQUEST);
        }else{
            // AT, RT
            JwtUser jwtUser = new JwtUser();

            jwtUser.setSignedUserId(res.getAdminId());
            Code code = codeRepository.findByCode(res.getCode());
            jwtUser.setRoles(code.getName());

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
        Admin admin = adminRepository.findById(p.getAdminId())
                .orElseThrow(() -> new CustomException("해당 관리자가 없습니다", HttpStatus.BAD_REQUEST));
        admin.setApw(hashedPassWord);
        adminRepository.save(admin);

        return 1;
    }

    // 비밀번호 찾기
    @Transactional
    public int findPassword(AdminFindPasswordReq p) {
        // 관리자 aid, 이메일 일치여부 확인
        AdminSignInRes adminData = adminMapper.selAdminByAid(p.getAid());

        if(adminData != null && adminData.getEmail().equals(p.getEmail())) {
            // 일치한다면 렌덤한 문자열을 생성후  DB에 저장
            String newPassword = PasswordGenerator.generateRandomPassword(8);

            // 비밀번호 암호화
            String hashedPassword = BCrypt.hashpw(newPassword, BCrypt.gensalt());

            Long adminId = adminRepository.findAdminIdByAidAndEmail(p.getAid(), p.getEmail());
            Admin admin = adminRepository.findById(adminId)
                    .orElseThrow(() -> new CustomException("해당 관리자가 존재하지 않습니다", HttpStatus.BAD_REQUEST));
            admin.setApw(hashedPassword);
            adminRepository.save(admin);
            adminRepository.flush();
            if(admin.getAdminId() != null) {
                throw new CustomException("비밀번호 변경에 실패하였습니다.", HttpStatus.BAD_REQUEST);
            } else {
                // 변경된 비밀번호 이메일 전송
                mailSendService.sendFindPasswordMail(adminData.getEmail(), newPassword);
            }
        } else {
            throw new CustomException("아이디 혹은 이메일이 일치하지 않습니다.", HttpStatus.BAD_REQUEST);
        }

        return 1;
    }

    public List<getCompanyPaymentRes> getCompanyPayment(){
        List<getCompanyPaymentRes> res = adminMapper.getCompanyPayment();

        return res;
    }

    //시스템 관리자 회원가입
    @Transactional
    public int SignUpAdmin(SignAdminReq p){
        p.setApw(BCrypt.hashpw(p.getApw(), BCrypt.gensalt()));

        int result = adminMapper.signAdmin(p);

        return result;
    }

    // 환불 금액 보기
    public List<SelRefundRes> getRefund(){
        List<SelRefundRes> res = adminMapper.selRefund();

        return res;
    }

    //회사 입점신청서 보기
    public List<SelCompanyEnrollmentRes> getCompanyEnrollment(){
        List<SelCompanyEnrollmentRes> res = adminMapper.selCompanyEnrollment();

        return res;
    }

    //식당 입점신청서 보기
    public List<SelRestaurantEnrollmentRes> getRestaurantEnrollment(){
        List<SelRestaurantEnrollmentRes> res = adminMapper.selRestaurantEnrollment();

        return res;
    }

    //식당 입점신청서 등록
    @Transactional
    public int postRestaurantEnrollment(InsRestaurantEnrollmentReq req){
        Code restaurentCode = codeRepository.findById("00101").orElse(null);
        if(restaurentCode == null) {
            throw new CustomException("코드를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }
        Code adminCode = codeRepository.findById("00103").orElse(null);
        if(adminCode == null) {
            throw new CustomException("코드를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }


        RestaurantCategory restaurantCategory = new RestaurantCategory();
        restaurantCategory.setCategoryId(req.getCategoryId());
        Restaurant restaurant = new Restaurant();
        restaurant.setCategoryId(restaurantCategory);
        restaurant.setBusinessNumber(req.getBusinessNumber());
        restaurant.setRestaurantName(req.getRestaurantName());
        restaurant.setRestaurantNumber(req.getRestaurantNumber());
        restaurant.setRestaurantAddress(req.getRestaurantAddress());
        restaurant.setLet(req.getLet());
        restaurant.setLng(req.getLng());
        restaurant.setMaxCapacity(req.getMaxCapacity());
        restaurant.setOperatingHours(req.getOperatingHours());
        restaurantRepository.save(restaurant);
        restaurantRepository.flush();

        Long divisionId = restaurant.getRestaurantId();

        Admin admin = new Admin();
        admin.setDivisionId(divisionId);
        admin.setCode(restaurentCode);
        admin.setEmail(req.getEmail());
        adminRepository.save(admin);

        return 1;
    }


    // 회사 입점신청서 등록
    @Transactional
    public int postCompanyEnrollment(InsCompanyEnrollmentReq req){
        Code companyCode = codeRepository.findById("00102").orElse(null);
        if(companyCode == null) {
            throw new CustomException("코드를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }
        Code adminCode = codeRepository.findById("00103").orElse(null);
        if(adminCode == null) {
            throw new CustomException("코드를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }
        //회사 insert
        String companyCd = getNextCompanyId();
        Company company = new Company();
        company.setBusinessNumber(req.getBusinessNumber());
        company.setName(req.getName());
        company.setCeoName(req.getCeoName());
        company.setAddress(req.getAddress());
        company.setCompanyCd(companyCd);
        companyRepository.save(company);
        companyRepository.flush(); //pk 가져오기

        Long divisionId = company.getCompanyId();
        Admin admin = new Admin();
        admin.setDivisionId(divisionId);
        admin.setCode(companyCode);
        admin.setEmail(req.getEmail());
        adminRepository.save(admin);


        return 1;
    }



    // 회사 코드가 자동으로 등록 될 수 있는 메소드
    @Transactional
    public String getNextCompanyId(){
        String lastCompanyCd = companyRepository.findFirstByLatestCompanyCd();

        if (lastCompanyCd == null) {
            return "0000";
        }

        int nextCompanyId = Integer.parseInt(lastCompanyCd) + 1;

        return String.format("%04d", nextCompanyId);
    }

    //회사, 식당 관리자 회원가입
    @Transactional
    public int updAdmin(SignUpAdminReq req){
        Admin admin = adminRepository.findById(req.getAdminId())
                .orElseThrow(() -> new CustomException("입점신청을 해주세요", HttpStatus.BAD_REQUEST));

        String hashedPassword = BCrypt.hashpw(req.getApw(), BCrypt.gensalt());

        admin.setAid(req.getAid());
        admin.setApw(hashedPassword);
        admin.setName(req.getName());
        admin.setPhone(req.getPhone());

        adminRepository.save(admin);

        return 1;
    }

    //게시글 등록하기
    @Transactional
    public int postSystemPost(MultipartFile pic, InsSystemInquiryReq req){
        Code postCode = new Code();
        postCode.setCode(req.getPostCode());
        Code roleCode = new Code();
        roleCode.setCode(req.getRoleCode());

        // 작성자 권한 조회
        Long signedUserId = authenticationFacade.getSignedUserId();
        if (!signedUserId.equals(req.getId())) {
            throw new CustomException("로그인한 사용자 정보와 일치하지 않는 정보입니다.", HttpStatus.BAD_REQUEST);
        }

        String savedPicName = pic != null ? myFileUtils.makeRandomFileName(pic) : null;

        SystemPost systemPost = new SystemPost();
        systemPost.setPost(postCode);
        systemPost.setRole(roleCode);
        systemPost.setInquiryTitle(req.getInquiryTitle());
        systemPost.setInquiryDetail(req.getInquiryDetail());
        systemPost.setPic(savedPicName);
        systemPost.setId(req.getId());
        systemPostRepository.save(systemPost);
        systemPostRepository.flush();

        Long systemId = systemPost.getInquiryId();

        if(pic != null) {
            String middlePath = String.format("systemPost/%d", systemId);
            myFileUtils.makeFolders(middlePath);
            String filePath = String.format("%s/%s", middlePath, savedPicName);
            try {
                myFileUtils.transferTo(pic, filePath);
            }catch (IOException e) {
                e.printStackTrace();
            }
        }

        return 1;
    }

    //게시글 자세히 보기
    public SelOneSystemPostRes getOneSystemPost(SystemPostDetailGetReq req){
        // 게시글 정보 조회
        SystemPost systemPost = systemPostRepository.findById(req.getInquiryId())
                .orElseThrow(() -> new CustomException("게시글이 존재하지 않습니다.", HttpStatus.NOT_FOUND));

        // 시스템 관리자 확인
        Admin admin = adminRepository.findById(req.getId())
                .orElseThrow(() -> new CustomException("시스템 관리자가 아닙니다.", HttpStatus.NOT_FOUND));

        // 게시글 조회 권한 확인
        if (!systemPost.getId().equals(req.getId()) || !admin.getCode().getCode().equals("00103")) {
            throw new CustomException("게시글 조회 권한이 없습니다.", HttpStatus.BAD_REQUEST);
        }

        SelOneSystemPostRes res = adminMapper.selOneSystemPost(req);

        return res;
    }

    //공지사항 등록
    @Transactional
    public int postAnnouncement(MultipartFile pic, InsAnnouncementReq req){
        Code postCode = codeRepository.findById("00201").orElse(null);
        if(postCode == null) {
            throw new CustomException("코드를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }
        Code roleCode = codeRepository.findById("00103").orElse(null);
        if(roleCode == null) {
            throw new CustomException("코드를 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }

        String savedPicName = pic != null ? myFileUtils.makeRandomFileName(pic) : null;

        SystemPost systemPost = new SystemPost();
        systemPost.setPost(postCode);
        systemPost.setRole(roleCode);
        systemPost.setInquiryTitle(req.getInquiryTitle());
        systemPost.setInquiryDetail(req.getInquiryDetail());
        systemPost.setId(req.getId());
        systemPost.setPic(savedPicName);
        systemPostRepository.save(systemPost);
        systemPostRepository.flush();

        Long systemId = systemPost.getId();

        if(pic != null) {
            String middlePath = String.format("systemPost/%d", systemId);
            myFileUtils.makeFolders(middlePath);
            String filePath = String.format("%s/%s", middlePath, savedPicName);
            try {
                myFileUtils.transferTo(pic, filePath);
            }catch (IOException e) {
                e.printStackTrace();
            }
        }

        return 1;
    }
}
