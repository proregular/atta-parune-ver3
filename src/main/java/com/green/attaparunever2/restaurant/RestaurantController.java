package com.green.attaparunever2.restaurant;


import com.green.attaparunever2.common.model.ResultResponse;
import com.green.attaparunever2.restaurant.model.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.xml.transform.Result;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("restaurant")
@Tag(name = "식당", description = "식당 관리")
public class RestaurantController {
    private final RestaurantService restaurantService;

    //------------------------------------------------------------------------------------------------------------------------------------------

    @GetMapping("v3/main")
    @Operation(summary = "메인 화면 식당 조회")
    public ResultResponse<List<GetRestaurantMainRes>> getRestaurantMain(@ParameterObject @ModelAttribute GetRestaurantMainReq req){
        List<GetRestaurantMainRes> res = restaurantService.getRestaurantMainV3(req);

        return ResultResponse.<List<GetRestaurantMainRes>>builder()
                .statusCode("200")
                .resultMsg("메인 화면 식당 정보 조회 완료")
                .resultData(res)
                .build();
    }
}