package com.hemanath.foodordering.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hemanath.foodordering.model.Restaurants;

import java.util.List;
import java.util.Optional;

@Repository
public interface RestaurantsRepository extends MongoRepository<Restaurants, String> {

    List<Restaurants> findByNameContainingIgnoreCase(String name);
    List<Restaurants> findByLocation(String location);

    List<Restaurants> findByCuisine(String cuisine);
    Optional<Restaurants> findByNameIgnoreCase(String name);


}
