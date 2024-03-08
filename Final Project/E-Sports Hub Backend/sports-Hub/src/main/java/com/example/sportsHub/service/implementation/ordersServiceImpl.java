package com.example.sportsHub.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.sportsHub.model.Order;
import com.example.sportsHub.model.OrderProduct;
import com.example.sportsHub.repository.OrderRepository;
import com.example.sportsHub.service.OrderService;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ordersServiceImpl implements OrderService  {
    @Autowired
    private OrderRepository orderRepository;

    @Override
    public Order createOrder(Order order) {
        // Save the order along with its products
        return orderRepository.save(order);
    }

    @Override
    public Optional<Order> getOrderById(String id) {
        return orderRepository.findById(id);
    }

    @Override
    public Order updateOrder(String id, Order updatedOrder) {
        Optional<Order> optionalOrder = orderRepository.findById(id);
        if (optionalOrder.isPresent()) {
            Order order = optionalOrder.get();
            // Update the order's fields
            order.setUserId(updatedOrder.getUserId());
            order.setBranchId(updatedOrder.getBranchId());
            order.setProducts(updatedOrder.getProducts());
            order.setTotalPrice(updatedOrder.getTotalPrice());
            order.setOrderDate(updatedOrder.getOrderDate());
            return orderRepository.save(order);
        }
        return null;
    }

    @Override
    public void deleteOrder(String id) {
        // Delete the order
        orderRepository.deleteById(id);
    }

    @Override
    public OrderProduct createOrderProduct(String orderId, OrderProduct orderProduct) {
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        if (optionalOrder.isPresent()) {
            Order order = optionalOrder.get();
            order.getProducts().add(orderProduct);
            orderRepository.save(order);
            return orderProduct;
        }
        return null;
    }

    @Override
    public Optional<OrderProduct> getOrderProductById(String orderId, String orderProductId) {
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        if (optionalOrder.isPresent()) {
            Order order = optionalOrder.get();
            return order.getProducts().stream()
                    .filter(product -> product.getProductId().equals(orderProductId))
                    .findFirst();
        }
        return Optional.empty();
    }

    @Override
    public OrderProduct updateOrderProduct(String orderId, String orderProductId, OrderProduct updatedOrderProduct) {
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        if (optionalOrder.isPresent()) {
            Order order = optionalOrder.get();
            for (OrderProduct orderProduct : order.getProducts()) {
                if (orderProduct.getProductId().equals(orderProductId)) {
                    // Update the order product
                    orderProduct.setProductId(updatedOrderProduct.getProductId());
                    orderProduct.setQuantity(updatedOrderProduct.getQuantity());
                    // Save the updated order
                    orderRepository.save(order);
                    return orderProduct;
                }
            }
        }
        return null;
    }

    @Override
    public void deleteOrderProduct(String orderId, String orderProductId) {
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        if (optionalOrder.isPresent()) {
            Order order = optionalOrder.get();
            order.getProducts().removeIf(product -> product.getProductId().equals(orderProductId));
            orderRepository.save(order);
        }
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }









}