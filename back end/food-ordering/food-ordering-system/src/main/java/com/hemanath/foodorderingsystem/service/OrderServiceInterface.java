package com.hemanath.foodorderingsystem.service;

import com.hemanath.foodorderingsystem.model.Order;

import java.util.List;

public interface OrderServiceInterface {

        Order getOrderById(String orderId);

        List<Order> getAllOrders();

        Order createOrder(Order order);
        boolean deleteOrder(String orderId);
}
