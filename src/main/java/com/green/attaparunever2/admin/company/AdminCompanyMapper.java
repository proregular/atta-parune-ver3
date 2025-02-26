package com.green.attaparunever2.admin.company;

import com.green.attaparunever2.admin.company.model.AdminCompanyPointHistory;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminCompanyMapper {
    List<AdminCompanyPointHistory> selCompanyPointHistoryByAdminId(long adminId);
}
