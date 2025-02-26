package com.green.attaparunever2.admin.system;

import com.green.attaparunever2.admin.AdminRepository;
import com.green.attaparunever2.admin.system.model.UpdAdmin;
import com.green.attaparunever2.admin.system.model.UpdCoalitionReq;
import com.green.attaparunever2.admin.system.model.UpdRefundReq;
import com.green.attaparunever2.common.excprion.CustomException;
import com.green.attaparunever2.company.CompanyRepository;
import com.green.attaparunever2.company.RefundRepository;
import com.green.attaparunever2.config.security.AuthenticationFacade;
import com.green.attaparunever2.entity.Admin;
import com.green.attaparunever2.entity.Company;
import com.green.attaparunever2.entity.Refund;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class AdminSystemService {
    private final AdminRepository adminRepository;
    private final AuthenticationFacade authenticationFacade;
    private final RefundRepository refundRepository;
    private final CompanyRepository companyRepository;

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
}
