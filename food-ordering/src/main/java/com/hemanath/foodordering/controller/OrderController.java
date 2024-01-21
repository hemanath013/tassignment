// package com.hemanath.foodorderingsystem.controller;

// import com.hemanath.foodorderingsystem.model.Order;
// import com.hemanath.foodorderingsystem.service.impl.OrderService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController

// @RequestMapping("/api/orders")
// public class OrderController {

//     @Autowired
//     private OrderService orderService;

//     @GetMapping("/{orderId}")
//     public ResponseEntity<Order> getOrderById(@PathVariable String orderId) {
//         Order order = orderService.getOrderById(orderId);
//         if (order != null) {
//             return new ResponseEntity<>(order, HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }

//     @GetMapping("/all")
//     public ResponseEntity<List<Order>> getAllOrders() {
//         List<Order> orders = orderService.getAllOrders();
//         return new ResponseEntity<>(orders, HttpStatus.OK);
//     }

// //    @PostMapping("/create")
// //    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
// //        Order createdOrder = orderService.createOrder(order);
// //        return new ResponseEntity<>(createdOrder, HttpStatus.CREATED);
// //    }

//     @DeleteMapping("/delete/{orderId}")
//     public ResponseEntity<String> deleteOrder(@PathVariable String orderId) {
//         boolean deleted = orderService.deleteOrder(orderId);
//         if (deleted) {
//             return new ResponseEntity<>("Order deleted successfully", HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>("Order not found", HttpStatus.NOT_FOUND);
//         }
//     }
// }
