package com.hemanath.foodordering.service.implementation;

import com.hemanath.foodordering.model.Restaurants;
import com.hemanath.foodordering.repository.RestaurantsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestaurantsService {

    @Autowired
    private final RestaurantsRepository restaurantsRepository;


    public RestaurantsService(RestaurantsRepository restaurantsRepository) {
        this.restaurantsRepository = restaurantsRepository;
    }

    public List<Restaurants> getAllRestaurants() {
        return restaurantsRepository.findAll();
    }

    public Optional<Restaurants> getRestaurantById(String restaurantId) {
        return restaurantsRepository.findById(restaurantId);
    }

    public Restaurants createRestaurant(Restaurants restaurant) {
        try {
            checkIfRestaurantExists(restaurant.getName());
            return restaurantsRepository.save(restaurant);
        } catch (DuplicateKeyException e) {
            throw new RuntimeException("Restaurant with the same name already exists");
        }
    }

    public void deleteRestaurant(String restaurantId) {
        restaurantsRepository.deleteById(restaurantId);
    }

    public List<Restaurants> searchRestaurantsByName(String name) {
        return restaurantsRepository.findByNameContainingIgnoreCase(name);
    }

    private void checkIfRestaurantExists(String name) {
        if (restaurantsRepository.findByNameIgnoreCase(name).isPresent()) {
            throw new DuplicateKeyException("Restaurant with the same name already exists");
        }
    }

   // method to retrieve restaurants based on location
   public List<Restaurants> getRestaurantsByLocation(String location) {
    return restaurantsRepository.findByLocation(location);
}

// method to retrieve restaurants based on cuisine
public List<Restaurants> getRestaurantsByCuisine(String cuisine) {
    return restaurantsRepository.findByCuisine(cuisine);
}

// method to find a specific restaurant by its ID
public Optional<Restaurants> findRestaurantById(String restaurantId) {
    return restaurantsRepository.findById(restaurantId);
}

// method to find a specific restaurant by its name
public Optional<Restaurants> findRestaurantByName(String name) {
    return restaurantsRepository.findByNameIgnoreCase(name);
}

}
