package com.hemanath.foodordering.model;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "order")
@NoArgsConstructor
@AllArgsConstructor
@Data


public class Order {
  @Id
  public String _id;
    public String customerId;
    public String restaurantId;
    public List<Item> items;
    public Date orderTime;
    public String status;

    public class Item{
        public int quantity;
        public List<String> menuIds;
    }
}