package com.example.sportsHub.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.sportsHub.model.Product;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {

    List<Product> findByBrand(String brand);

    @Query("{'name': {$regex: ?0, $options: 'i'}}")
    List<Product> findByName(String name);

    List<Product> findByCategory(String category);

    List<Product> findByPriceBetween(double minPrice, double maxPrice);

    List<Product> findAllByBrand(String brand);

    
        @Query(value = "{'category': {$exists: true}}", fields = "{'category': 1}")
        List<String> findDistinctCategories();
  
    
}