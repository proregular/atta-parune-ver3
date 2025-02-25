package com.green.attaparunever2.admin.company;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.green.attaparunever2.admin.AdminMapper;
import com.green.attaparunever2.admin.AdminRepository;
import com.green.attaparunever2.admin.company.model.AdminCompanyPaymentTempPostReq;
import com.green.attaparunever2.admin.company.model.AdminCompanyUserPointPatchReq;
import com.green.attaparunever2.common.excprion.CustomException;
import com.green.attaparunever2.common.util.PaymentUtils;
import com.green.attaparunever2.company.CompanyMapper;
import com.green.attaparunever2.company.CompanyRepository;
import com.green.attaparunever2.config.security.AuthenticationFacade;
import com.green.attaparunever2.entity.Admin;
import com.green.attaparunever2.entity.Company;
import com.green.attaparunever2.entity.PaymentInfoTmp;
import com.green.attaparunever2.entity.User;
import com.green.attaparunever2.user.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AdminCompanyService {
    private final PaymentInfoTmpRepository paymentInfoTmpRepository;
    private final CompanyRepository companyRepository;
    private final AdminMapper adminMapper;
    private final PaymentUtils paymentUtils;
    private final CompanyMapper companyMapper;
    private final AdminRepository adminRepository;
    private final AuthenticationFacade authenticationFacade;
    private final UserRepository userRepository;

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
    public ResponseEntity<Object> patchPoint(HttpServletRequest request, String jsonBody) throws Exception {
        // JSON 문자열을 자바 객체로 변환
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(jsonBody);  // JsonNode로 변환

        long adminId = jsonNode.get("adminId").asLong();
        String paymentKey = jsonNode.get("paymentKey").asText();
        int amount = jsonNode.get("amount").asInt();
        String orderId = jsonNode.get("orderId").asText();

        // 01. 결재요청 정보 일치하는지 여부 검사 ----------------------
        PaymentInfoTmp paymentInfoTmp = paymentInfoTmpRepository.findById(orderId)
                .orElseThrow(() -> new IllegalArgumentException("일치하는 orderId가 존재하지 않습니다."));

        if(paymentInfoTmp.getAmount() != amount) {
            throw new CustomException("결재 금액이 일치하지 않습니다.", HttpStatus.BAD_REQUEST);
        }

        // 추출한 데이터를 새로운 JSON 문자열로 변환
        JsonNode newJsonNode = objectMapper.createObjectNode()
                .put("paymentKey", jsonNode.get("paymentKey").asText())
                .put("orderId", jsonNode.get("orderId").asText())
                .put("amount", jsonNode.get("amount").asInt());

        // 새로운 JSON 객체를 JSON 문자열로 변환
        String newJsonString = objectMapper.writeValueAsString(newJsonNode);
        System.out.println("New JSON String: " + newJsonString);


        // 03. 토스 서버로 결재 승인 요청 ----------------------
        String secretKey = request.getRequestURI().contains("/confirm/payment") ? PaymentUtils.API_SECRET_KEY : PaymentUtils.WIDGET_SECRET_KEY;
        JSONObject response = paymentUtils.sendRequest(paymentUtils.parseRequestData(newJsonString), secretKey, "https://api.tosspayments.com/v1/payments/confirm");
        int statusCode = response.containsKey("error") ? 400 : 200;


        // 04. 결재가 성공적으로 완료된 경우 결재 정보 DB 저장 ----------------------
        if(statusCode == 200) {
            // 결재정보 DB 저장
            // 미구현
        } else {
            return ResponseEntity.status(statusCode).body(response);
        }

        return null;
    }

    /*@Transactional
    public void patchPointUser(AdminCompanyUserPointPatchReq req) {
        Long adminId = authenticationFacade.getSignedUserId();

        // 어드민 정보 가져옴
        Admin admin = adminRepository.findById(adminId).orElseThrow();

        Company company = companyRepository.findById(admin.getDivisionId()).orElseThrow();

        // 포인트가 있는지 여부 검사
        if(company.getCurrentPoint() < 10000) {
            throw new CustomException("입금할 포인트가 부족합니다.", HttpStatus.BAD_REQUEST);
        }

        // 사용자 정보 가져옴
        User user = userRepository.findById(req.get)

        // 사용자에게 포인트 입금

        // 회사 정보 포인트 출금 처리

        // 회사 정보 저장

        // 포인트 3개월 뒤에 환수 딜레이 큐 설정

    }*/
}
