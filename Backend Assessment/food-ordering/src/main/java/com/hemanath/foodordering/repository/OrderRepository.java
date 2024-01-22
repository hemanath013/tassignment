package com.hemanath.foodordering.repository;
import java.sql.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hemanath.foodordering.model.Order;

@Repository
public interface OrderRepository extends MongoRepository<Order, String> {

        List<Order> findByCustomerId(String customerId);

    List<Order> findByRestaurantId(String restaurantId);

    List<Order> findByOrderTimeBetween(Date startDate, Date endDate);

    List<Order> findByStatus(String status);
}
