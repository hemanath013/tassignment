package com.example.sportsHub.service;

import java.util.List;
import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

import com.example.sportsHub.model.Branch;
import com.example.sportsHub.model.Product;
import com.example.sportsHub.model.ProductDTO;
import com.example.sportsHub.model.UpdateProduct;

public interface ProductService {

    Product createProduct(ProductDTO product, MultipartFile imageFile);

    List<Product> getAllProducts();

    Optional<Product> getProductById(String id);

    // Product updateProduct(String id, Product product);

    void deleteProduct(String id);

    Product updateProduct(String id, UpdateProduct product);

    Product deleteBranchDetail(String productId, String branchDetailId);

    List<Product> getProductsByName(String name);

    List<Product> getProductsByCategory(String category);

    List<Product> getProductsByPriceRange(double minPrice, double maxPrice);

    List<Product> getProductsByBrand(String brand);

    int getCountOfGetProductsByName(String name);

    List<String> getAllCategories();

    String imageConvet(MultipartFile file);

    Product update(String id, Product product);


}
