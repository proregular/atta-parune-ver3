package com.green.attaparunever2.order;

import com.green.attaparunever2.common.excprion.CustomException;
import com.green.attaparunever2.config.security.AuthenticationFacade;
import com.green.attaparunever2.entity.*;
import com.green.attaparunever2.order.model.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderMapper mapper;
    private final SimpMessagingTemplate messagingTemplate;
    private final AuthenticationFacade authenticationFacade;
    private final OrderRepository orderRepository;
    private final OrderDetailRepository orderDetailRepository;


    public long postOrder(OrderPostReq p) {
        return mapper.postOrder(p);
    }

    public int postOrderDetail(OrderDetailPostReq p) {
        return mapper.postOrderDetail(p);
    }

    @Transactional
    public long postOrderWithDetail(OrderPostReq p) {
        User user = new User();
        user.setUserId(p.getUserId());

        Restaurant restaurant = new Restaurant();
        restaurant.setRestaurantId(p.getRestaurantId());

        Order order = new Order();
        order.setUserId(user);
        order.setRestaurantId(restaurant);
        orderRepository.save(order);
        orderRepository.flush();



        for (OrderDetailPostReq detailReq : p.getOrderDetails()) {
            RestaurantMenu restaurantMenu = new RestaurantMenu();
            restaurantMenu.setMenuId(detailReq.getMenuId());

            OrderDetail orderDetail = new OrderDetail();
            orderDetail.setOrderId(order);
            orderDetail.setMenuId(restaurantMenu);
            orderDetail.setMenuCount(detailReq.getMenuCount());
            orderDetail.setPrice(detailReq.getPrice());
            orderDetailRepository.save(orderDetail);
        }

        return 1;
    }

    public int updOrderAccess(OrderAccessPatchReq p) {
        // 사용자에게 예약결과 알림 설정
        Order order = orderRepository.findById(p.getOrderId())
                .orElseThrow(() -> new CustomException("해당 주문을 찾을 수 없습니다", HttpStatus.BAD_REQUEST));

        order.setReservationStatus(p.getReservationStatus());
        order.setCreatedAt(p.getCreatedAt());
        orderRepository.save(order);
        orderRepository.flush();
        OrderAccessMessageRes res = new OrderAccessMessageRes();
        res.setOrderId(order.getOrderId());
        res.setCreatedAt(order.getCreatedAt());
        res.setReservationStatus(order.getReservationStatus());
        res.setTypeMessage("식당에서의 예약 승인, 거부 여부");
        messagingTemplate.convertAndSend(
                "/queue/reservation/" + order.getOrderId() + "/user/reservation",
                res
        );

        return 1;
    }

    public GetOrderRes getOrder(OrderGetReq p) {
        GetOrderRes res = mapper.getOrder(p);
        List<GetOrderDto> list = mapper.getOrderList(p);

        res.setOrderDtoList(list);

        return res;

    }

    // 예약 주문 목록
    public List<RestaurantOrderDto> getReservationOrder(OrderListSelReq p) {
        List<RestaurantOrderDto> orderList = mapper.selReservationOrderListByRestaurantId(p.getRestaurantId());

        for(RestaurantOrderDto order : orderList) {
            order.setOrderDetails(mapper.selOrderDetailByOrderId(order.getOrderId()));
        }

        return orderList;
    }

    // 예약완료 주문 목록(미결재)
    public List<RestaurantOrderDto> getCompleteOrder(OrderListSelReq p) {
        List<RestaurantOrderDto> orderList = mapper.selCompleteOrderListByRestaurantId(p.getRestaurantId());

        for(RestaurantOrderDto order : orderList) {
            order.setOrderDetails(mapper.selOrderDetailByOrderId(order.getOrderId()));
        }

        return orderList;
    }
}
