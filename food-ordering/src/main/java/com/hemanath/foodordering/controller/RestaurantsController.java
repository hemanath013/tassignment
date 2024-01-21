package com.hemanath.foodordering.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hemanath.foodordering.model.Restaurants;
import com.hemanath.foodordering.service.implementation.RestaurantsService;

@RestController
@RequestMapping("/api/restaurants")
public class RestaurantsController {

    @Autowired
    private final RestaurantsService restaurantsService;

    public RestaurantsController(RestaurantsService restaurantsService) {
        this.restaurantsService = restaurantsService;
    }

    @GetMapping
    public ResponseEntity<List<Restaurants>> getAllRestaurants() {
        List<Restaurants> restaurants = restaurantsService.getAllRestaurants();
        return new ResponseEntity<>(restaurants, HttpStatus.OK);
    }

    @GetMapping("/{restaurantId}")
    public ResponseEntity<Restaurants> getRestaurantById(@PathVariable String restaurantId) {
        Optional<Restaurants> restaurant = restaurantsService.getRestaurantById(restaurantId);
        return restaurant.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/postRestaurant")
    public ResponseEntity<Restaurants> createRestaurant(@RequestBody Restaurants restaurant) {
        try {
            Restaurants createdRestaurant = restaurantsService.createRestaurant(restaurant);
            return new ResponseEntity<>(createdRestaurant, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            // Handle the error as needed (log, return a specific error response, etc.)
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{restaurantId}")
    public ResponseEntity<Void> deleteRestaurant(@PathVariable String restaurantId) {
        restaurantsService.deleteRestaurant(restaurantId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Restaurants>> searchRestaurantsByName(@RequestParam String name) {
        List<Restaurants> restaurants = restaurantsService.searchRestaurantsByName(name);
        return new ResponseEntity<>(restaurants, HttpStatus.OK);
    }
}
