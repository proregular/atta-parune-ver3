package com.green.attaparunever2.system;

import com.green.attaparunever2.admin.AdminService;
import com.green.attaparunever2.admin.model.InsSystemInquiryReq;
import com.green.attaparunever2.admin.model.SelOneSystemPostRes;
import com.green.attaparunever2.common.model.ResultResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("system")
@Tag(name = "시스템", description = "시스템 게시글 관리")
public class SystemController {
    private final AdminService adminService;
    private final SystemService systemService;

    @PostMapping("v3/post")
    @Operation(summary = "게시글 등록하기")
    public ResultResponse<Integer> postSystemPost(@RequestPart(required = false) MultipartFile pic
            , @RequestPart InsSystemInquiryReq req){
        int result = adminService.postSystemPost(pic, req);

        return ResultResponse.<Integer>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("게시글 등록완료")
                .resultData(result)
                .build();
    }

    @GetMapping("v3/post")
    @Operation(summary = "게시글 자세히 보기")
    public ResultResponse<SelOneSystemPostRes> getSelOneSystemPost(@ParameterObject @ModelAttribute long inquiryId){
        SelOneSystemPostRes res = adminService.getOneSystemPost(inquiryId);

        return ResultResponse.<SelOneSystemPostRes>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("게시글 자세히 보기 완료")
                .resultData(res)
                .build();

    }
}
