package com.hemanath.foodordering.service;

import java.util.List;
import java.util.Optional;

import com.hemanath.foodordering.model.Restaurants;

public interface RestaurantServiceInterface {
     List<Restaurants> findByNameContainingIgnoreCase(String name);
    Optional<Restaurants> findByNameIgnoreCase(String name);


}
