package com.hemanath.foodorderingsystem.service;

import com.hemanath.foodorderingsystem.model.Restaurants;

import java.util.List;

public interface RestaurantServiceInterface {

    Restaurants getRestaurantById(String restaurantId);
    List<Restaurants> getAllRestaurants();
    Restaurants createRestaurant(Restaurants restaurant);
    Restaurants updateRestaurant(String restaurantId, Restaurants updatedRestaurant);
    boolean deleteRestaurant(String restaurantId);

    //List<Menus> getAllMenusByRestarauntName(String name);

}
