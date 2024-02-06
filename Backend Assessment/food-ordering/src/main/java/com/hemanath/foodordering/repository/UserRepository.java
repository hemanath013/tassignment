package com.hemanath.foodordering.repository;

// import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.hemanath.foodordering.model.User;

@Repository

public interface UserRepository extends MongoRepository<User, String>{

    boolean existsByUsername(String username);

    Optional<User> findByUsername(String username);

    //List<User> findByPlacedOrders();

}
