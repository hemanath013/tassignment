package com.hemanath.foodorderingsystem.repository;

import com.hemanath.foodorderingsystem.model.Menus;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenusRepository extends MongoRepository<Menus, String>{
    List<Menus> findByNameContainingIgnoreCase(String menuName);
}
