package com.green.attaparunever2.restaurant;


import com.green.attaparunever2.common.MyFileUtils;
import com.green.attaparunever2.common.excprion.CustomException;
import com.green.attaparunever2.order.OrderMapper;
import com.green.attaparunever2.order.model.OrderDetailDto;
import com.green.attaparunever2.restaurant.model.*;
import com.green.attaparunever2.restaurant.restaurant_menu.RestaurantMenuMapper;
import com.green.attaparunever2.restaurant.restaurant_menu.model.MenuSelCateList;
import com.green.attaparunever2.restaurant.restaurant_menu.model.MenuSelList;
import com.green.attaparunever2.restaurant.restaurant_pic.RestaurantPicMapper;
import com.green.attaparunever2.restaurant.restaurant_pic.model.RestaurantPicAroundSel;
import com.green.attaparunever2.restaurant.restaurant_pic.model.RestaurantPicSel;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Slf4j
@Service
@RequiredArgsConstructor
public class RestaurantService {
    private final RestaurantMapper restaurantMapper;
    private final RestaurantPicMapper restaurantPicMapper;
    private final RestaurantMenuMapper restaurantMenuMapper;
    private final MyFileUtils myFileUtils;
    private final OrderMapper orderMapper;

    public long postRestaurant(InsRestaurantReq p){
        int result = restaurantMapper.insRestaurant(p);

        if (result == 0) {
            throw new CustomException("식당 등록에 실패했습니다.", HttpStatus.BAD_REQUEST);
        }
        return p.getRestaurantId();
    }

    public SelRestaurantRes getRestaurant(SelRestaurantReq p){
        // 식당 정보 불러오기
        SelRestaurantRes res = restaurantMapper.selRestaurant(p);
        // 식당 사진 불러오기
        RestaurantPicSel restaurantPicSel = restaurantPicMapper.selRestaurantPic(p.getRestaurantId());
        res.setRestaurantPics(restaurantPicSel);
        // 식당 메뉴 카테고리 불러오기
        List<MenuSelCateList> menuSelCateList = restaurantMenuMapper.selMenuCategoryList(p.getRestaurantId());
        res.setMenuCateList(menuSelCateList);
        // 식당 메뉴 불러오기
        for (MenuSelCateList category : menuSelCateList) {
            // 4.1 각 카테고리 ID를 사용하여 해당 카테고리의 메뉴를 조회
            List<MenuSelList> menuList = restaurantMenuMapper.selMenuList(category.getCategoryId());

            // 4.2 카테고리 객체에 메뉴 리스트 설정
            category.setMenuList(menuList);
        }
        return res;
    }

    public List<SelRestaurantAroundRes> getRestaurantAround(SelRestaurantAroundReq p){
        double latitude = p.getUserLat(); // 위도
        double longitude = p.getUserLng(); // 경도

        // 반경 3km
        double radiusInKm = 3.0;

        // 위도 1도의 거리 (고정: 111km)
        double latitudeDegreeInKm = 111.0;
        double latitudeDiff = radiusInKm / latitudeDegreeInKm;

        // 경도 1도의 거리 (위도에 따라 다름)
        double longitudeDegreeInKm = 111.0 * Math.cos(Math.toRadians(latitude));
        double longitudeDiff = radiusInKm / longitudeDegreeInKm;

        // 위도와 경도의 범위 계산
        double minLatitude = latitude - latitudeDiff; // 가까운 위도
        double maxLatitude = latitude + latitudeDiff; // 먼 위도
        double minLongitude = longitude - longitudeDiff; // 가까운 경도
        double maxLongitude = longitude + longitudeDiff; // 먼 경도

        p.setSysMinLat(minLatitude);
        p.setSysMinLng(minLongitude);
        p.setSysMaxLat(maxLatitude);
        p.setSysMaxLng(maxLongitude);


        log.info("aiobhdfibhfdibhi {} asda {} asdasd", p.getSysMinLat(), p.getSysMinLng());
        log.info("asdasifjaisfjasi {} {}", p.getSysMaxLat(), p.getSysMaxLng());

        log.info("오더 필터 : {} 검색 필터 {}", p.getOrderFilter(), p.getSearchFilter());

        List<SelRestaurantAroundRes> list = restaurantMapper.selRestaurantAround(p);
        for (SelRestaurantAroundRes res : list) {
            // 각 식당에 대해 사진 리스트를 가져오기
            List<RestaurantPicAroundSel> picList = restaurantPicMapper.selRestaurantAroundPic(res.getRestaurantId());

            // 사진 리스트를 해당 식당 객체에 설정
            res.setRestaurantArroundPicList(picList);

            log.info("qwer : {} pic : {}", res.getRestaurantId(), res.getRestaurantArroundPicList());
        }

        // 시연 용코드 (시연 후 삭제)-------------------------------------
        Random random = new Random();

        for(SelRestaurantAroundRes item : list) {
            // 10에서 40 사이의 랜덤 정수 생성
            int randomNumber = random.nextInt(11) + 20;  // 0부터 30까지의 값을 생성하고 10을 더함
            item.setAvgRestaurant(randomNumber);
        }
        //----------------------------------------------------------------

        // 3. 최종적으로 수정된 식당 목록 반환
        return list;
    }


    public int postHoliday(InsHolidayReq p){
        int result = restaurantMapper.insHoliday(p);

        return result;
    }

    public List<SelHolidayRes> getHoliday(SelHolidayReq p){
        List<SelHolidayRes> res = restaurantMapper.selHolidays(p);

        return res;
    }

    @Transactional
    public int patchRestaurant(UpdRestaurantReq req) {
        int result = restaurantMapper.updRestaurant(req);
        if (result == 0) {
            throw new CustomException("식당 수정에 실패했습니다.", HttpStatus.BAD_REQUEST);
        }
        return result;
    }

    public int patchHoliday(UpdHolidayReq req) {
        int result = restaurantMapper.updHoliday(req);

        if (result == 0) {
            throw new CustomException("휴무일 수정에 실패했습니다.", HttpStatus.BAD_REQUEST);
        }
        return result;
    }

    public List<SelRestaurantMainRes> getRestaurantMain(SelRestaurantMainReq p){
        // 식당 정보 불러오기
        List<SelRestaurantMainRes> res = restaurantMapper.selRestaurantMain(p);
        // 식당 사진 불러오기
        for (SelRestaurantMainRes item : res) {
            RestaurantPicAroundSel picList = restaurantPicMapper.selRestaurantMainPic(item.getRestaurantId());
            item.setRestaurantAroundPicList(picList);
        }

        // 시연 용코드 (시연 후 삭제)-------------------------------------
        Random random = new Random();

        for(SelRestaurantMainRes item : res) {
            // 10에서 40 사이의 랜덤 정수 생성
            int randomNumber = random.nextInt(11) + 20;  // 0부터 30까지의 값을 생성하고 10을 더함
            item.setAvgRestaurant(randomNumber);
        }
        //----------------------------------------------------------------

        return res;
    }

    public SelRestaurantDashBoardRes getRestaurantDashboard(SelRestaurantDashboardReq req) {
        SelRestaurantDashBoardRes res = new SelRestaurantDashBoardRes();

        res.setRestaurantId(req.getRestaurantId());

        // 일별, 월별 총 매출 받아옴
        RestaurantTotalPointDto dayPoint = restaurantMapper.selRestaurantDayPoint(req);
        RestaurantTotalPointDto monthPoint = restaurantMapper.selRestaurantMonthPoint(req);

        if(dayPoint != null) {
            res.setDayPoint(dayPoint.getTotalPoint());
        } else {
            res.setDayPoint(0);
        }
        if(monthPoint != null) {
            res.setMonthPoint(monthPoint.getTotalPoint());
        } else {
            res.setMonthPoint(0);
        }

        // 주간 예약 현황 받아옴
        SelRestaurantWeekOrderReq orderReq = new SelRestaurantWeekOrderReq();

        // 현재일시의 주간 일자를 구한다.(자바로 구현 해야함.)

        // 날짜 형식 지정
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        // String을 LocalDate로 변환
        LocalDate currentDate = LocalDate.parse(req.getDate(), formatter);

        // 월요일이 주간의 시작일이므로, 현재 날짜 기준으로 가장 가까운 월요일을 찾기
        LocalDate startOfWeek = currentDate.with(DayOfWeek.MONDAY);

        // 일요일은 월요일에서 6일 더한 날짜
        LocalDate endOfWeek = startOfWeek.plusDays(6);

        orderReq.setRestaurantId(req.getRestaurantId());
        orderReq.setStartDate(startOfWeek.format(formatter));
        orderReq.setEndDate(endOfWeek.format(formatter));

        List<RestaurantWeekOrderCountDto> weekOrder = restaurantMapper.selRestaurantWeekOrderCount(orderReq);

        res.setWeekOrderList(weekOrder);

        return res;
    }

    public List<SelRestaurantOrderRes> getRestaurantPoint(SelRestaurantOrderReq req) {
        List<SelRestaurantOrderRes> orderList = restaurantMapper.selRestaurantPointByCreatedAt(req);

        for(SelRestaurantOrderRes order : orderList) {
            List<OrderDetailDto> orderDetails = orderMapper.selOrderDetailByOrderId(order.getOrderId());
            order.setOrderDetails(orderDetails);
        }

        return orderList;
    }
}