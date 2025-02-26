package com.green.attaparunever2.admin.system;

import com.green.attaparunever2.admin.AdminRepository;
import com.green.attaparunever2.admin.SystemPostRepository;
import com.green.attaparunever2.admin.system.model.*;
import com.green.attaparunever2.common.excprion.CustomException;
import com.green.attaparunever2.company.CompanyRepository;
import com.green.attaparunever2.company.RefundRepository;
import com.green.attaparunever2.config.security.AuthenticationFacade;
import com.green.attaparunever2.entity.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class AdminSystemService {
    private final AdminRepository adminRepository;
    private final AuthenticationFacade authenticationFacade;
    private final RefundRepository refundRepository;
    private final CompanyRepository companyRepository;
    private final SystemPostCommentRepository systemPostCommentRepository;
    private final SystemPostRepository systemPostRepository;
    private final AdminSystemMapper adminSystemMapper;

    public int patchCoalition(UpdCoalitionReq req) {
        // 관리자 로그인 인증
        Long signedAdminId = authenticationFacade.getSignedUserId();
        if (!signedAdminId.equals(req.getAdminSystemId())) {
            throw new CustomException("로그인한 관리자 계정과 일치하지 않는 관리자 정보입니다.", HttpStatus.BAD_REQUEST);
        }

        // 식당 & 회사 관리자 정보 조회
        Admin admin = adminRepository.findById(req.getAdminCompanyAndRestaurantId())
                .orElseThrow(() -> new CustomException("관리자 정보를 조회할 수 없습니다.", HttpStatus.NOT_FOUND));

        // 제휴 상태 변경
        admin.setCoalitionState(1 - admin.getCoalitionState());

        adminRepository.save(admin);

        return 1;
    }

    //환불 상태 처리
    public int patchRefund(UpdRefundReq req) {
        Refund refund = refundRepository.findById(req.getRefundId())
                .orElseThrow(() -> new CustomException("해당 환불이 없습니다.", HttpStatus.BAD_REQUEST));

        Long adminId = refund.getAdmin().getAdminId();
        Admin admin = adminRepository.findById(adminId)
                .orElseThrow(() -> new CustomException("해당 관리자가 없습니다.", HttpStatus.BAD_REQUEST));

        Long divisionId = admin.getDivisionId();
        Company company = companyRepository.findById(divisionId)
                .orElseThrow(() -> new CustomException("해당 회사가 없습니다.", HttpStatus.BAD_REQUEST));
        if(req.getRefundYn() == 1) {
            int minPoint = refund.getRefundPoint();
            company.setCurrentPoint(company.getCurrentPoint() + minPoint);
            companyRepository.save(company);
        }
        refund.setRefundYn(req.getRefundYn());
        refundRepository.save(refund);



        return 1;
    }

    //입점신청서 승인 및 거절
    public int patchEnrollmentState(UpdAdmin req){
        Admin admin = adminRepository.findById(req.getAdminId())
                .orElseThrow(() -> new CustomException("해당 관라자가 없습니다", HttpStatus.BAD_REQUEST));

        admin.setCoalitionState(req.getCoalitionState());
        adminRepository.save(admin);

        return 1;
    }

    //시스템 문의 답변
    public int postSystemPostComment(InsSystemPostCommentReq req){
        SystemPost systemPost = systemPostRepository.findById(req.getInquiryId())
                .orElseThrow(() -> new CustomException("해당 게시물이 존재하지 않습니다.", HttpStatus.BAD_REQUEST));

        Admin admin = adminRepository.findById(req.getAdminId())
                .orElseThrow(() -> new CustomException("해당 관리자가 없습니다.", HttpStatus.BAD_REQUEST));

        if(!admin.getCode().getCode().equals("00103")){
            throw new CustomException("시스템 관리자가 아닙니다", HttpStatus.BAD_REQUEST);
        }

        SystemPostComment systemPostComment = new SystemPostComment();
        systemPostComment.setSystemPost(systemPost);
        systemPostComment.setAdmin(admin);
        systemPostComment.setCommentDetail(req.getCommentDetail());
        systemPostCommentRepository.save(systemPostComment);

        return 1;
    }

    //시스템 문의 답변 조회
    public List<SelSystemPostCommentRes> getSystemPostComment(SelSystemPostCommentReq req){
        List<SelSystemPostCommentRes> res = adminSystemMapper.selSystemPostComment(req);

        return res;
    }

    //시스템 문의 답변 수정
    public int patchSystemPostComment(UpdSystemPostCommentReq req){
        SystemPostComment systemPostComment = systemPostCommentRepository.findById(req.getInquiryCommentId())
                .orElseThrow(() -> new CustomException("해당 문의답변이 없습니다", HttpStatus.BAD_REQUEST));

        Admin admin = adminRepository.findById(systemPostComment.getAdmin().getAdminId())
                .orElseThrow(() -> new CustomException("해당 관리자가 없습니다.", HttpStatus.BAD_REQUEST));

        if(!admin.getCode().getCode().equals("00103")){
            throw new CustomException("시스템 관리자가 아닙니다", HttpStatus.BAD_REQUEST);
        }

        systemPostComment.setCommentDetail(req.getCommentDetail());
        systemPostCommentRepository.save(systemPostComment);

        return 1;
    }

}
