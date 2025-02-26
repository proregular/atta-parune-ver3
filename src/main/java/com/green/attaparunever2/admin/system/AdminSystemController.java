package com.green.attaparunever2.admin.system;

import com.green.attaparunever2.admin.AdminService;
import com.green.attaparunever2.admin.model.InsAnnouncementReq;
import com.green.attaparunever2.admin.model.InsSystemInquiryReq;
import com.green.attaparunever2.admin.model.SelOneSystemPostRes;
import com.green.attaparunever2.admin.model.SelRefundRes;
import com.green.attaparunever2.admin.system.model.*;
import com.green.attaparunever2.common.model.ResultResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("admin/system")
@Tag(name="관리자 시스템", description = "관리자 시스템 관련 API")
public class AdminSystemController {
    private final AdminService adminService;
    private final AdminSystemService adminSystemService;

    @PostMapping("v3/announcement")
    @Operation(summary = "공지사항 등록하기")
    public ResultResponse<Integer> postSystemPost(@RequestPart(required = false) MultipartFile pic
            , @RequestPart InsAnnouncementReq req){
        int result = adminService.postAnnouncement(pic, req);

        return ResultResponse.<Integer>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("공지사항 등록완료")
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

    @PatchMapping("v3/coalition")
    @Operation(summary = "제휴 상태 관리")
    public ResultResponse<Integer> patchCoalition(@RequestBody UpdCoalitionReq req) {
        int result = adminSystemService.patchCoalition(req);

        return ResultResponse.<Integer>builder()
                .statusCode("200")
                .resultMsg("제휴 상태 변경 성공")
                .resultData(result)
                .build();
    }

    @PatchMapping("v3/refund")
    @Operation(summary = "환불 요청 처리")
    public ResultResponse<Integer> patchRefund(@RequestBody UpdRefundReq req) {
        int result = adminSystemService.patchRefund(req);

        return ResultResponse.<Integer>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("환불 요청 처리 완료")
                .resultData(result)
                .build();
    }

    @PatchMapping("v3/enrollmentState")
    @Operation(summary = "입점신청서 승인 및 거절")
    public ResultResponse<Integer> patchEnrollmentState(UpdAdmin req){
        int result = adminSystemService.patchEnrollmentState(req);

        return ResultResponse.<Integer>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("입점신청서 상태 변경 완료")
                .resultData(result)
                .build();
    }

    @PostMapping("v3/systemPostComment")
    @Operation(summary = "시스템 문의 답변 등록")
    public ResultResponse<Integer> postSystemPostComment(InsSystemPostCommentReq req){
        int result = adminSystemService.postSystemPostComment(req);

        return ResultResponse.<Integer>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("시스템 문의 답변 등록 완료")
                .resultData(result)
                .build();
    }
    
    @GetMapping("v3/systemPostComment")
    @Operation(summary = "시스템 문의 답변 조회")
    public ResultResponse<List<SelSystemPostCommentRes>> getSystemPostComment(SelSystemPostCommentReq req){
        List<SelSystemPostCommentRes> res = adminSystemService.getSystemPostComment(req);
        
        return ResultResponse.<List<SelSystemPostCommentRes>>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("시스템 문의 답변 조회 완료")
                .resultData(res)
                .build();
    }
}
