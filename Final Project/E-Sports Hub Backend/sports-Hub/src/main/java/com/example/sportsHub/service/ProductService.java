package com.example.sportsHub.service;

import java.util.List;
import java.util.Optional;

import com.example.sportsHub.model.Product;

public interface ProductService {

    Product createProduct(Product product);

    List<Product> getAllProducts();

    Optional<Product> getProductById(String id);

    // Product updateProduct(String id, Product product);

    void deleteProduct(String id);

    Product updateProduct(String id, Product product);

    Product deleteBranchDetail(String productId, String branchDetailId);

    List<Product> getProductsByName(String name);

    List<Product> getProductsByCategory(String category);

    List<Product> getProductsByPriceRange(double minPrice, double maxPrice);

    List<Product> getProductsByBrand(String brand);

    int getCountOfGetProductsByName();

}
