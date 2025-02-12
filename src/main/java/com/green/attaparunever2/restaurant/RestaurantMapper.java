package com.green.attaparunever2.restaurant;

import com.green.attaparunever2.restaurant.model.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface RestaurantMapper {
    int insRestaurant(InsRestaurantReq p);
    SelRestaurantRes selRestaurant(SelRestaurantReq p);
    List<SelRestaurantAroundRes> selRestaurantAround(SelRestaurantAroundReq p);

    int insHoliday(InsHolidayReq p);
    List<SelHolidayRes> selHolidays(SelHolidayReq p);
    int updRestaurant(UpdRestaurantReq p);
    int updHoliday(UpdHolidayReq p);
    List<SelRestaurantMainRes> selRestaurantMain(SelRestaurantMainReq p);

    // 식당 일일 매출 정보 조회
    RestaurantTotalPointDto selRestaurantDayPoint(SelRestaurantDashboardReq req);
    // 식당 월별 매출 정보 조회
    RestaurantTotalPointDto selRestaurantMonthPoint(SelRestaurantDashboardReq req);
    // 식당 주간 주문 내역 조회
    List<RestaurantWeekOrderCountDto> selRestaurantWeekOrderCount(SelRestaurantWeekOrderReq req);
    // 식당 매출 정보 조회
    List<SelRestaurantOrderRes> selRestaurantPointByCreatedAt(SelRestaurantOrderReq req);
}
