package com.hemanath.foodorderingsystem.service.impl;

import com.hemanath.foodorderingsystem.model.Menus;
import com.hemanath.foodorderingsystem.model.Restaurants;
import com.hemanath.foodorderingsystem.repository.RestaurantsRepository;
import com.hemanath.foodorderingsystem.service.RestaurantServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class RestaurantService implements RestaurantServiceInterface {

    @Autowired
    private RestaurantsRepository restaurantRepository;

    public Restaurants getRestaurantById(String restaurantId) {
        return restaurantRepository.findById(restaurantId).orElse(null);
    }


    public List<Restaurants> getAllRestaurants() {
        return restaurantRepository.findAll();
    }



    public Restaurants createRestaurant(Restaurants restaurant) {
        return restaurantRepository.save(restaurant);
    }

    @Override
    public Restaurants updateRestaurant(String restaurantId, Restaurants updatedRestaurant) {
        return null;
    }

//    public Restaurants updateRestaurant(String restaurantId, Restaurants updatedRestaurant) {
//        Restaurants existingRestaurant = restaurantRepository.findById(restaurantId).orElse(null);
//        if (existingRestaurant != null) {
//            existingRestaurant.setName(updatedRestaurant.getName());
//            return restaurantRepository.save(existingRestaurant);
//        } else {
//            return null;
//        }
//    }

    public boolean deleteRestaurant(String restaurantId) {
        if (restaurantRepository.existsById(restaurantId)) {
            restaurantRepository.deleteById(restaurantId);
            return true;
        } else {
            return false;
        }
    }

    // @Override
    // public List<Menus> getAllMenusByRestarauntName(String name) {
    //     Optional<Restaurants> restaurants = restaurantRepository.findByName(name);

    //     if(restaurants.isPresent()){
    //         List<Menus> menus = restaurantRepository.findByMenuRestaurantId(restaurants.get().getRestaurantId());
    //         return menus;
    //     }
    // }

    public List<Restaurants> searchRestaurantsByName(String restaurantName) {
        return restaurantRepository.findByNameIgnoreCase(restaurantName);
    }

}
