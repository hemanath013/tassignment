package com.example.chart.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "user")
public class user {
    @Id
    private String id;
    private String userName;
    private String userId;
    private double latitude;
    private double longitude;
    private String district;
    private Date date;
}
