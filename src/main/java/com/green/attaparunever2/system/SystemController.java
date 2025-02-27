package com.green.attaparunever2.system;

import com.green.attaparunever2.admin.AdminService;
import com.green.attaparunever2.admin.model.InsSystemInquiryReq;
import com.green.attaparunever2.admin.model.SelOneSystemPostRes;
import com.green.attaparunever2.admin.model.SelSystemPostRes;
import com.green.attaparunever2.admin.model.SystemPostDetailGetReq;
import com.green.attaparunever2.common.model.Paging;
import com.green.attaparunever2.common.model.ResultResponse;
import com.green.attaparunever2.system.model.UpdSystemPostReq;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

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

    @GetMapping("v3/post/detail")
    @Operation(summary = "게시글 자세히 보기")
    public ResultResponse<SelOneSystemPostRes> getSelOneSystemPost(@ParameterObject @ModelAttribute SystemPostDetailGetReq req){
        SelOneSystemPostRes res = adminService.getOneSystemPost(req);

        return ResultResponse.<SelOneSystemPostRes>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("게시글 자세히 보기 완료")
                .resultData(res)
                .build();

    }

    @PatchMapping("v3/post")
    @Operation(summary = "게시글 수정하기")
    public ResultResponse<Integer> patchSystemInquiry(@RequestPart(required = false) MultipartFile pic, @RequestPart UpdSystemPostReq req) {
        int result = systemService.patchSystemPost(pic, req);

        return ResultResponse.<Integer>builder()
                .statusCode("200")
                .resultMsg("게시글 수정 완료")
                .resultData(result)
                .build();
    }

    @GetMapping("v3/post")
    @Operation(summary = "게시글 조회하기")
    public ResultResponse<List<SelSystemPostRes>> getSystemPost(
            @RequestParam(required = false, defaultValue = "1") Integer page,
            @RequestParam(required = false, defaultValue = "10") Integer size) {

        Paging paging = new Paging(page, size);

        List<SelSystemPostRes> res = adminService.getSystemPost(paging);

        return ResultResponse.<List<SelSystemPostRes>>builder()
                .statusCode("200")
                .resultMsg("게시글 조회가 완료되었습니다.")
                .resultData(res)
                .build();
    }

    @DeleteMapping("v3/post")
    @Operation(summary = "게시글 삭제하기")
    public ResultResponse<Integer> deleteSystemPost(@RequestParam Long inquiryId) throws IllegalAccessException {
        int result = adminService.deleteSystemPost(inquiryId);
        return ResultResponse.<Integer>builder()
                .statusCode("200")
                .resultMsg("게시글이 삭제되었습니다.")
                .resultData(result)
                .build();
    }
}
