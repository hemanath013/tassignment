package com.hemanath.foodordering.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hemanath.foodordering.model.Menus;

import java.util.List;

@Repository
public interface MenusRepository extends MongoRepository<Menus, String>{
  
}
