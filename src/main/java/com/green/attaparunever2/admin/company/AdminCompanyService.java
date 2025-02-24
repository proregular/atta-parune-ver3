package com.green.attaparunever2.admin.company;

import com.green.attaparunever2.admin.company.model.AdminCompanyPaymentTempPostReq;
import com.green.attaparunever2.admin.company.model.AdminCompanyPointPatchReq;
import com.green.attaparunever2.admin.model.AdminDelReq;
import com.green.attaparunever2.common.excprion.CustomException;
import com.green.attaparunever2.entity.PaymentInfoTmp;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AdminCompanyService {
    final PaymentInfoTmpRepository paymentInfoTmpRepository;

    // 포인트 구매 결재전 결재 정보 임시 저장
    @Transactional
    public PaymentInfoTmp postPaymentTemp(AdminCompanyPaymentTempPostReq req) {
        PaymentInfoTmp paymentInfoTmp = new PaymentInfoTmp();

        paymentInfoTmp.setOrderId(req.getOrderId());
        paymentInfoTmp.setAmount(req.getAmount());

        return paymentInfoTmpRepository.save(paymentInfoTmp);
    }

    // 포인트 구매
    @Transactional
    public int patchPoint(AdminCompanyPointPatchReq req) {

        return 0;
    }
}
