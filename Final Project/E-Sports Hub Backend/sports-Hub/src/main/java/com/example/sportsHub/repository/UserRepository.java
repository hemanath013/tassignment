package com.example.sportsHub.repository;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.sportsHub.model.User;



@Repository

public interface UserRepository extends MongoRepository<User, String>{

    boolean existsByUsername(String username);

    Optional<User> findByUsername(String username);

    //List<User> findByPlacedOrders();

}
