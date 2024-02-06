package com.hemanath.foodordering.service.implementation;

import com.hemanath.foodordering.model.Order;
import com.hemanath.foodordering.repository.MenusRepository;
import com.hemanath.foodordering.repository.OrderRepository;

import java.sql.Date;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    private final MenusRepository menusRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> getAllOrders() {
        try {
            return orderRepository.findAll();
        } catch (Exception e) {
            e.printStackTrace();
            return Collections.emptyList();
        }
    }

    public Order getOrderById(String id) {
        try {
            Optional<Order> optionalOrder = orderRepository.findById(id);
            return optionalOrder.orElse(null);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public Order createOrder(Order order) {
        try {
            if(order.getItems().getQuantity() > menusRepository.findBy_id().getMaxOrderQuantity()){
                return throw new Exception("Invalid quantity");
            } else {
                return orderRepository.save(order);
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to create order. Please check the data and try again.");
        }
    }

    public Order updateOrder(String id, Order order) {
        try {
            if (orderRepository.existsById(id)) {
                order.set_id(id);
                return orderRepository.save(order);
            } else {
                return null;
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to update order. Please check the data and try again.");
        }
    }

    public boolean deleteOrder(String id) {
        try {
            if (orderRepository.existsById(id)) {
                orderRepository.deleteById(id);
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to delete order. Please check the data and try again.");
        }
    }

    // method to retrieve orders for a specific user
    public List<Order> getOrdersByUserId(String userId) {
        return orderRepository.findByCustomerId(userId);
    }

    
    //  method to retrieve orders for a specific restaurant
    public List<Order> getOrdersByRestaurantId(String restaurantId) {
        return orderRepository.findByRestaurantId(restaurantId);
    }

    //  method to filter orders based on a date range
    public List<Order> getOrdersByDateRange(Date startDate, Date endDate) {
        return orderRepository.findByOrderTimeBetween(startDate, endDate);
    }

      //  method to filter orders based on status
      public List<Order> getOrdersByStatus(String status) {
        return orderRepository.findByStatus(status);
    }

    

}
