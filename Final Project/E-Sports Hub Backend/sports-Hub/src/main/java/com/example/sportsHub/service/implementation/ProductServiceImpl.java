package com.example.sportsHub.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sportsHub.AOP.ProductNameCounterAspect;
import com.example.sportsHub.model.Product;
import com.example.sportsHub.repository.ProductRepository;
import com.example.sportsHub.service.ProductService;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;
      @Autowired
    private ProductNameCounterAspect counterAspect;

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> getAllProducts() {
        List<Product> product = productRepository.findAll();
        return product;
    }

    @Override
    public Optional<Product> getProductById(String id) {
        return productRepository.findById(id);
    }

    @Override()
    public Product updateProduct(String id, Product product) {
        if (productRepository.existsById(id)) {
            product.setBrand(id); 
            return productRepository.save(product);
        }
        return null;
    }

    @Override
    public void deleteProduct(String id) {
        productRepository.deleteById(id);
    }
    
    // Method to delete a branch detail from a product
    @Override
    public Product deleteBranchDetail(String productId, String branchDetailId) {
        Optional<Product> optionalProduct = productRepository.findById(productId);
        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();
            product.getBranchDetails().removeIf(branchDetail -> branchDetail.getBranchId().equals(branchDetailId));
            return productRepository.save(product);
        }
        return null;
    }

    @Override
    public List<Product> getProductsByBrand(String brand) {
        return productRepository.findAllByBrand(brand);
    }

   

    @Override
    public List<Product> getProductsByName(String name) {
        List<Product> products = productRepository.findByName(name);
        products.forEach(product -> product.setGetNameCount(product.getGetNameCount() + 1));
        return products;
    }

    @Override
    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategory(category);
    }

    @Override
    public List<Product> getProductsByPriceRange(double minPrice, double maxPrice) {
        return productRepository.findByPriceBetween(minPrice, maxPrice);
    }



    @Override
    public int getCountOfGetProductsByName() {
        return counterAspect.getCount();
    }








}
