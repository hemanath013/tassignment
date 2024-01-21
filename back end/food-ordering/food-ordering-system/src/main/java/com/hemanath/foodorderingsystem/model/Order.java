package com.hemanath.foodorderingsystem.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;

@Document(collection = "order")
@NoArgsConstructor
@AllArgsConstructor

@Data


public class Order {
  @Id
  public String _id;
    public String customerId;
    public String restaurantId;
    public ArrayList<Item> items;
    public Date orderTime;
    public String status;

    public class Item{
        public int quantity;
        public Menus menus;

        public class Menus{
            public String id;
            public String name;
            public String description;
            public int price;
        }
    }
}