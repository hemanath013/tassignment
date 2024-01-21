package com.hemanath.foodorderingsystem.service.impl;

import com.hemanath.foodorderingsystem.model.Order;
import com.hemanath.foodorderingsystem.repository.OrderRepository;
import com.hemanath.foodorderingsystem.service.OrderServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class OrderService implements OrderServiceInterface {
    @Autowired
    private OrderRepository orderRepository;

    @Override

    public Order getOrderById(String orderId) {
        return orderRepository.findById(orderId).orElse(null);
    }

    @Override

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order createOrder(Order order) {
        return null;
    }

    @Override

//    public Order createOrder(Order order) {
//        order.setOrderTime(new Date());
//        order.setStatus("Placed");
//        return orderRepository.save(order);
//    }



    public boolean deleteOrder(String orderId) {
        if (orderRepository.existsById(orderId)) {
            orderRepository.deleteById(orderId);
            return true;
        } else {
            return false;
        }
    }



}
