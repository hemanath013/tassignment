package com.example.supply_chain.repository;

import com.example.supply_chain.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends MongoRepository<User,String> {

    User findByName(String username);
}
