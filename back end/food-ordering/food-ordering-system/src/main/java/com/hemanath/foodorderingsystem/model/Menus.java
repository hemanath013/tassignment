package com.hemanath.foodorderingsystem.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

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
