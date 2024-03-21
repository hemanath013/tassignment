package com.example.sportsHub.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import jakarta.mail.Multipart;
import lombok.Data;

@Data
public class UpdateProduct {
    private String id;
    private String product_id;
    private String name;
    private String description;
    private String price;
    private String category;
    private String brand;
    private String totalStock;
    private MultipartFile file;
    // private int getNameCount; 
    // private String image;
    // @DocumentReference(collection="BranchDetail")
    private List<BranchDetail> branchDetails;


 public UpdateProduct () {
    this.branchDetails = new ArrayList<>();
 }
}
