package com.hemanath.foodorderingsystem.repository;

import com.hemanath.foodorderingsystem.model.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends MongoRepository<Order, String> {
}
