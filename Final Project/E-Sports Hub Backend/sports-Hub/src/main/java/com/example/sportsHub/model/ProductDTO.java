package com.example.sportsHub.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class ProductDTO {

    private String product_id;
    private String name;
    private String description;
    private double price;
    private String category;
    private String brand;
    private int totalStock;
    private int getNameCount; 
    private MultipartFile  image;
    // @DocumentReference(collection="BranchDetail")
    private List<BranchDetail> branchDetails;
}
