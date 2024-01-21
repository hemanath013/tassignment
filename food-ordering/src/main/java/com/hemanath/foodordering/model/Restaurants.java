package com.hemanath.foodordering.model;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "restaurants")
@NoArgsConstructor
@AllArgsConstructor

@Data
public class Restaurants {

    private String restaurantId;
    private String name;
    private String description;
    private int price;
}