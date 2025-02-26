package com.green.attaparunever2.admin.company.dashboard;


import com.green.attaparunever2.admin.company.dashboard.model.SelRecentAmountReq;
import com.green.attaparunever2.admin.company.dashboard.model.SelRecentAmountRes;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class DashboardService {
    private final DashboardMapper dashboardMapper;

    public List<SelRecentAmountRes> getRecentAmount(SelRecentAmountReq req){
        List<SelRecentAmountRes> res = dashboardMapper.selRecentAmount(req);

        return res;
    }
}
