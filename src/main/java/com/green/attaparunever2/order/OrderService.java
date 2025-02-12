package com.green.attaparunever2.order;

import com.green.attaparunever2.config.security.AuthenticationFacade;
import com.green.attaparunever2.order.model.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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

    public long postOrder(OrderPostReq p) {
        return mapper.postOrder(p);
    }

    public int postOrderDetail(OrderDetailPostReq p) {
        return mapper.postOrderDetail(p);
    }

    @Transactional
    public long postOrderWithDetail(OrderPostReq p) {
        long res = mapper.postOrder(p);

        for (OrderDetailPostReq detailReq : p.getOrderDetails()) {
            detailReq.setOrderId(p.getOrderId());
            mapper.postOrderDetail(detailReq);
        }
        return res;
    }

    public int updOrderAccess(OrderAccessPatchReq p) {
        // 사용자에게 예약결과 알림 설정
        OrderAccessMessageRes res = new OrderAccessMessageRes();
        res.setOrderId(p.getOrderId());
        res.setCreatedAt(p.getCreatedAt());
        res.setReservationStatus(p.getReservationStatus());
        res.setTypeMessage("식당에서의 예약 승인, 거부 여부");
        messagingTemplate.convertAndSend(
                "/queue/reservation/" + p.getOrderId() + "/user/reservation",
                res
        );

        return mapper.updOrderAccess(p);
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
