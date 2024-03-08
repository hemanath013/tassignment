package com.example.sportsHub.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.sportsHub.model.Product;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {

    List<Product> findByBrand(String brand);

    List<Product> findByName(String name);

    List<Product> findByCategory(String category);

    List<Product> findByPriceBetween(double minPrice, double maxPrice);

    List<Product> findAllByBrand(String brand);
    
}