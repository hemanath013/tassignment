package com.hemanath.foodorderingsystem.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

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
