package com.hemanath.foodordering.repository;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hemanath.foodordering.model.Menus;
@Repository
public interface MenusRepository extends MongoRepository<Menus, String>{

    List<Menus> findByRestaurantId(String restaurantId);

    List<Menus> findByNameIgnoreCase(String name);

    List<Menus> findByPriceBetween(int minPrice, int maxPrice);

    List<Menus> findByDescriptionContainingIgnoreCase(String description);

    List<Menus> findByNameContainingIgnoreCase(String name);
  
}
