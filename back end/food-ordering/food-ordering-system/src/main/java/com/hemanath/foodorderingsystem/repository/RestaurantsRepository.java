package com.hemanath.foodorderingsystem.repository;

import com.hemanath.foodorderingsystem.model.Menus;
import com.hemanath.foodorderingsystem.model.Restaurants;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RestaurantsRepository extends MongoRepository<Restaurants, String> {
    List<Restaurants> findByNameIgnoreCase(String restaurantName);

    List<Menus> findByMenuRestaurantId(String id);
    Optional<Restaurants> findByName(String name);
}
