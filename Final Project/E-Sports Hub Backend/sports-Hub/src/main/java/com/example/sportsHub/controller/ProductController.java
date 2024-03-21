package com.example.sportsHub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.method.P;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.sportsHub.AOP.ProductNameCounterAspect;
import com.example.sportsHub.model.Branch;
import com.example.sportsHub.model.Product;
import com.example.sportsHub.model.ProductDTO;
import com.example.sportsHub.model.UpdateProduct;
import com.example.sportsHub.service.ProductService;

import jakarta.mail.Multipart;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;
    @Autowired
    private ProductNameCounterAspect counterAspect;

    @PostMapping("/create")
    public ResponseEntity<Product> createProduct(@ModelAttribute ProductDTO product, @RequestParam("file") MultipartFile imageFile) {
        Product createdProduct = productService.createProduct(product, imageFile);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
    }
    
 
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable String id) {
        Optional<Product> product = productService.getProductById(id);
        return product.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/update")
    public ResponseEntity<Product> updateProduct(@ModelAttribute UpdateProduct product) {
        System.out.println("  product   "+product);
        
        
        Product updatedProduct = productService.updateProduct(product.getId(), product);
        

        if (updatedProduct != null) {
            return ResponseEntity.ok(updatedProduct);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

      @PutMapping("/{id}")
    public ResponseEntity<Product> update(@PathVariable String id, @RequestBody Product product) {
        Product updatedBranch =productService.update(id, product);
        if (updatedBranch != null) {
            return ResponseEntity.ok(updatedBranch);
        } else {
            return ResponseEntity.notFound().build();
        }
    }




    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable String id) {
        productService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }
    
    // Method to delete a branch detail from a product
    @DeleteMapping("/{productId}/branchDetails/{branchDetailId}")
    public ResponseEntity<Product> deleteBranchDetail(@PathVariable String productId, @PathVariable String branchDetailId) {
        Product updatedProduct = productService.deleteBranchDetail(productId, branchDetailId);
        if (updatedProduct != null) {
            return ResponseEntity.ok(updatedProduct);
        } else {
            return ResponseEntity.notFound().build();
        }}

        // Get products by name
    @GetMapping("/by-name/{name}")
    public ResponseEntity<List<Product>> getProductsByName(@PathVariable String name) {
        List<Product> products = productService.getProductsByName(name);
        return ResponseEntity.ok(products);
    }

    // Get products by category
    @GetMapping("/by-category/{category}")
    public ResponseEntity<List<Product>> getProductsByCategory(@PathVariable String category) {
        List<Product> products = productService.getProductsByCategory(category);
        return ResponseEntity.ok(products);
    }

    // Get products by price range
    @GetMapping("/by-price-range")
    public ResponseEntity<List<Product>> getProductsByPriceRange(@RequestParam double minPrice, @RequestParam double maxPrice) {
        List<Product> products = productService.getProductsByPriceRange(minPrice, maxPrice);
        return ResponseEntity.ok(products);
    }

    // Get products by brand
    @GetMapping("/by-brand/{brand}")
    public ResponseEntity<List<Product>> getProductsByBrand(@PathVariable String brand) {
        List<Product> products = productService.getProductsByBrand(brand);
        return ResponseEntity.ok(products);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<Integer> getCountOfGetProductsByName(@PathVariable String name) {
        int count = productService.getCountOfGetProductsByName(name);
        return new ResponseEntity<>(count, HttpStatus.OK);
    }

    @GetMapping("/new")
    public ResponseEntity<List<String>> getAllCategories() {
        List<String> categories = productService.getAllCategories();
        return ResponseEntity.ok(categories);
    }



    
}
