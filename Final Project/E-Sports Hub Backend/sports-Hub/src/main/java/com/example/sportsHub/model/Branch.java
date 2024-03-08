package com.example.sportsHub.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "branches")
public class Branch {
    @Id
    private String id;
    private String branch_id;
    private String name;
    private String location;
    private String manager;
    private String phone;
    private String email;
}
