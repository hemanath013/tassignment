package com.hemanath.foodordering.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "menus")
@NoArgsConstructor
@AllArgsConstructor
@Data

public class Menus {

    @Id
    private String _id;
    private String restaurantId;
    private String name;
    private String description;
    private int price;


}