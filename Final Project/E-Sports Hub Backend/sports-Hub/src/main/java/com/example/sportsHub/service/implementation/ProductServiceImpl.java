package com.example.sportsHub.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.sportsHub.AOP.ProductNameCounterAspect;
import com.example.sportsHub.model.Branch;
import com.example.sportsHub.model.Product;
import com.example.sportsHub.model.ProductDTO;
import com.example.sportsHub.model.UpdateProduct;
import com.example.sportsHub.repository.ProductRepository;
import com.example.sportsHub.service.FileService;
import com.example.sportsHub.service.ProductService;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;
      @Autowired
    private ProductNameCounterAspect counterAspect;

    @Autowired
    FileService fileService;


    @Override
    public Product createProduct(ProductDTO product, MultipartFile imageFile) {
        // String url = fileService.saveFile(product.getImage(),"C:/Users/STARIM/Desktop/2/FULLSTACK/Final Project/E-Sports Hub Backend/sports-Hub/src/main/resources/static/img");
        Product newProduct = new Product();
        newProduct.setProduct_id(product.getProduct_id());
        newProduct.setName(product.getName());
        newProduct.setDescription(product.getDescription());
        newProduct.setPrice(product.getPrice());
        newProduct.setCategory(product.getCategory());
        newProduct.setBrand(product.getBrand());
        // newProduct.setTotalStock(product.getTotalStock());
        newProduct.setImage(imageConvet(imageFile));
        return productRepository.save(newProduct);
    }

    @Override
    public List<Product> getAllProducts() {
        List<Product> product = productRepository.findAll();
        return product;
    }

    @Override
    public Optional<Product> getProductById(String id) {
        Optional<Product> productList = productRepository.findById(id);
        Product product = productList.get();
        product.setGetNameCount(product.getGetNameCount()+1);
        productRepository.save(product);
        return productRepository.findById(id);
    }

    @Override()
    public Product updateProduct(String id, UpdateProduct product) {
        if (productRepository.existsById(id)) {
            product.setBrand(id); 
            Product product2 = new Product();
            product2.setId(product.getId());
            // product2.setBranchDetails(product.get);
            product2.setBrand(product.getBrand());
            product2.setCategory(product.getCategory());
            product2.setDescription(product.getDescription());
            product2.setName(product.getName());
            product2.setPrice(Double.parseDouble(product.getPrice()));
            product2.setProduct_id(product.getProduct_id());
            product2.setTotalStock(Integer.parseInt(product.getTotalStock()));
            product2.setImage(imageConvet(product.getFile()));
            return productRepository.save(product2);
        }
        return null;
    }

    @Override
    public String imageConvet(MultipartFile file) {
        String url = "";
        String contentType = file.getContentType();

        if (contentType != null && contentType.startsWith("image")) {
            url = "http://localhost:8080/static/img/" + file.getOriginalFilename();
            try {
                file.transferTo(new File("C:/Users/STARIM/Desktop/2/FULLSTACK/Final Project/E-Sports Hub Backend/sports-Hub/src/main/resources/static/img" + file.getOriginalFilename()));
            } 
            catch (IllegalStateException | IOException e) {
                e.printStackTrace();
            }
        } 
        else {
            throw new RuntimeException("Invalid file type");
        }
        return url;
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
        System.out.println(products);
        products.forEach(product -> product.setGetNameCount(product.getGetNameCount() + 1));
        productRepository.saveAll(products);
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
    public int getCountOfGetProductsByName( String name) {  
        return counterAspect.getCount();
    }

    @Override
    public List<String> getAllCategories() {
        return productRepository.findDistinctCategories();
    }

    

    @Override
    public Product update(String id, Product product) {
        if (productRepository.existsById(id)) {
            product.setId(id);
            return productRepository.save(product);
        }
        return null;
    }







}
