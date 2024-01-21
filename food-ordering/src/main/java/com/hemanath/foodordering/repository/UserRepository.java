package com.hemanath.foodordering.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hemanath.foodordering.model.User;

public interface UserRepository extends MongoRepository<User, String>{

    boolean existsByUsername(String username);

    Optional<User> findByUsername(String username);

}
