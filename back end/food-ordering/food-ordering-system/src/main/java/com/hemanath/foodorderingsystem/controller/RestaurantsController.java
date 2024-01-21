package com.hemanath.foodorderingsystem.controller;

import com.hemanath.foodorderingsystem.model.Restaurants;
import com.hemanath.foodorderingsystem.service.impl.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/restaurants")
public class RestaurantsController {

    @Autowired
    private RestaurantService restaurantService;

    @GetMapping("/{restaurantId}")
    public ResponseEntity<Restaurants> getRestaurantById(@PathVariable String restaurantId) {
        Restaurants restaurants = restaurantService.getRestaurantById(restaurantId);
        if (restaurants != null) {
            return new ResponseEntity<>(restaurants, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Restaurants>> getAllRestaurants() {
        List<Restaurants> restaurants = restaurantService.getAllRestaurants();
        return new ResponseEntity<>(restaurants, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Restaurants> createRestaurant(@RequestBody Restaurants restaurants) {
        Restaurants createdRestaurant = restaurantService.createRestaurant(restaurants);
        return new ResponseEntity<>(createdRestaurant, HttpStatus.CREATED);
    }



    @PutMapping("/update/{restaurantId}")
    public ResponseEntity<Restaurants> updateRestaurant(@PathVariable String restaurantId, @RequestBody Restaurants updatedRestaurant) {
        Restaurants restaurant = restaurantService.updateRestaurant(restaurantId, updatedRestaurant);
        if (restaurant != null) {
            return new ResponseEntity<>(restaurant, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{restaurantId}")
    public ResponseEntity<String> deleteRestaurant(@PathVariable String restaurantId) {
        boolean deleted = restaurantService.deleteRestaurant(restaurantId);
        if (deleted) {
            return new ResponseEntity<>("Restaurant deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Restaurant not found", HttpStatus.NOT_FOUND);
        }
    }


    @GetMapping("/search")
    public ResponseEntity<List<Restaurants>> searchRestaurantsByName(@RequestParam String restaurantName) {
        List<Restaurants> restaurants = restaurantService.searchRestaurantsByName(restaurantName);
        if (!restaurants.isEmpty()) {
            return new ResponseEntity<>(restaurants, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}