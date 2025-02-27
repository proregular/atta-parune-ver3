package com.green.attaparunever2.admin.company.dashboard;


import com.green.attaparunever2.admin.company.dashboard.model.SelRecentAmountReq;
import com.green.attaparunever2.admin.company.dashboard.model.SelRecentAmountRes;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface DashboardMapper {
    List<SelRecentAmountRes> selRecentAmount(SelRecentAmountReq req);
}
