package com.example.sportsHub.model;

import java.time.LocalDate;
// import java.util.List;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "orders")
public class Order {
    @Id
    private String id;
    private String userId;
    private String branchId;
    private List<OrderProduct> products;
    private double totalPrice;
    private LocalDate orderDate;
    private String fullName;
    private String phone;
    private String email;
    private String pinCode;
    private String fullAddress;
    private String paymentMethod;
}

