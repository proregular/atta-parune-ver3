package com.green.attaparunever2.admin.company.dashboard;

import com.green.attaparunever2.admin.company.dashboard.model.SelRecentAmountReq;
import com.green.attaparunever2.admin.company.dashboard.model.SelRecentAmountRes;
import com.green.attaparunever2.common.model.ResultResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("admin/company/dashboard")
@Tag(name = "관리자 회사 대시보드", description = "대시보드 관련 API")
public class DashboardController {
    private final DashboardService dashboardService;

    @GetMapping("v3/RecentAmount")
    @Operation(summary = "최근 거래 내역")
    public ResultResponse<List<SelRecentAmountRes>> getRecentAmount(SelRecentAmountReq req) {
        List<SelRecentAmountRes> res = dashboardService.getRecentAmount(req);

        return ResultResponse.<List<SelRecentAmountRes>>builder()
                .statusCode(HttpStatus.OK.toString())
                .resultMsg("최근 거래 내역 완료")
                .resultData(res)
                .build();
    }
}
