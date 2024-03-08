package com.example.sportsHub.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import com.example.sportsHub.model.Order;
import com.example.sportsHub.model.OrderProduct;

public interface OrderService {
  // Order CRUD operations
  Order createOrder(Order order);
  List<Order> getAllOrders();
  Optional<Order> getOrderById(String id);
  Order updateOrder(String id, Order order);
  void deleteOrder(String id);

  // OrderProduct CRUD operations
  OrderProduct createOrderProduct(String orderId, OrderProduct orderProduct);
  Optional<OrderProduct> getOrderProductById(String orderId, String orderProductId);
  OrderProduct updateOrderProduct(String orderId, String orderProductId, OrderProduct updatedOrderProduct);
  void deleteOrderProduct(String orderId, String orderProductId);
static List<Order> getOrdersByUserId(String userId) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getOrdersByUserId'");
}
static List<Order> getOrdersByBranchId(String branchId) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getOrdersByBranchId'");
}
static List<Order> getOrdersByPriceRange(double minPrice, double maxPrice) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getOrdersByPriceRange'");
}
static List<Order> getOrdersByDateRange(LocalDate start, LocalDate end) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'getOrdersByDateRange'");
}
}