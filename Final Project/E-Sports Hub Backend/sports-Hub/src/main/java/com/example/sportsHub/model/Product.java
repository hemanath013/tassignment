package com.example.sportsHub.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.List;

@Data
@Document(collection = "products")
public class Product {
    @Id
    private String id;
    private String product_id;
    private String name;
    private String description;
    private double price;
    private String category;
    private String brand;
    private int totalStock;
    private int getNameCount; 
    private String image;
    // @DocumentReference(collection="BranchDetail")
    private List<BranchDetail> branchDetails;
}
