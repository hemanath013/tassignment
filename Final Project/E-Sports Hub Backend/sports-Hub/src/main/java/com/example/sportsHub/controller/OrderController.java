package com.example.sportsHub.controller;

import com.example.sportsHub.model.Order;
import com.example.sportsHub.model.OrderProduct;
import com.example.sportsHub.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        Order createdOrder = orderService.createOrder(order);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdOrder);
    }

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable String id) {
        Optional<Order> order = orderService.getOrderById(id);
        return order.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable String id, @RequestBody Order updatedOrder) {
        Order order = orderService.updateOrder(id, updatedOrder);
        if (order != null) {
            return ResponseEntity.ok(order);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable String id) {
        orderService.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{orderId}/products")
    public ResponseEntity<OrderProduct> addOrderProduct(@PathVariable String orderId, @RequestBody OrderProduct orderProduct) {
        OrderProduct createdOrderProduct = orderService.createOrderProduct(orderId, orderProduct);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdOrderProduct);
    }

    @GetMapping("/{orderId}/products/{orderProductId}")
    public ResponseEntity<OrderProduct> getOrderProductById(@PathVariable String orderId, @PathVariable String orderProductId) {
        Optional<OrderProduct> orderProduct = orderService.getOrderProductById(orderId, orderProductId);
        return orderProduct.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{orderId}/products/{orderProductId}")
    public ResponseEntity<OrderProduct> updateOrderProduct(@PathVariable String orderId, @PathVariable String orderProductId, @RequestBody OrderProduct updatedOrderProduct) {
        OrderProduct orderProduct = orderService.updateOrderProduct(orderId, orderProductId, updatedOrderProduct);
        if (orderProduct != null) {
            return ResponseEntity.ok(orderProduct);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{orderId}/products/{orderProductId}")
    public ResponseEntity<Void> deleteOrderProduct(@PathVariable String orderId, @PathVariable String orderProductId) {
        orderService.deleteOrderProduct(orderId, orderProductId);
        return ResponseEntity.noContent().build();
    }


      @GetMapping("/user/{userId}")
    public ResponseEntity<List<Order>> getOrdersByUserId(@PathVariable String userId) {
        List<Order> orders = OrderService.getOrdersByUserId(userId);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping("/branch/{branchId}")
    public ResponseEntity<List<Order>> getOrdersByBranchId(@PathVariable String branchId) {
        List<Order> orders = OrderService.getOrdersByBranchId(branchId);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping("/price")
    public ResponseEntity<List<Order>> getOrdersByPriceRange(@RequestParam double minPrice, @RequestParam double maxPrice) {
        List<Order> orders = OrderService.getOrdersByPriceRange(minPrice, maxPrice);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping("/date")
    public ResponseEntity<List<Order>> getOrdersByDateRange(@RequestParam String startDate, @RequestParam String endDate) {
        LocalDate start = LocalDate.parse(startDate);
        LocalDate end = LocalDate.parse(endDate);
        List<Order> orders = OrderService.getOrdersByDateRange(start, end);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }








}
