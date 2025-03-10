package com.green.attaparunever2.admin.system;

import com.green.attaparunever2.admin.system.model.SelSettlementDetailReq;
import com.green.attaparunever2.admin.system.model.SelSettlementDetailRes;
import com.green.attaparunever2.admin.system.model.SelSystemPostCommentReq;
import com.green.attaparunever2.admin.system.model.SelSystemPostCommentRes;
import com.green.attaparunever2.user.model.GetReviewReq;
import com.green.attaparunever2.user.model.GetReviewRequestDto;
import com.green.attaparunever2.user.model.GetReviewRequestReq;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminSystemMapper {
    List<SelSystemPostCommentRes> selSystemPostComment(SelSystemPostCommentReq req);
    SelSettlementDetailRes res = new SelSettlementDetailRes();
    List<SelSettlementDetailRes> selSettlementDetail(SelSettlementDetailReq req);
    List<GetReviewRequestDto> getReviewRequestList(GetReviewRequestReq p);
}
