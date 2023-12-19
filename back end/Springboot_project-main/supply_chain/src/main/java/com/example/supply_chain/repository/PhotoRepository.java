 package com.example.supply_chain.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.supply_chain.model.Photos;

public interface PhotoRepository extends MongoRepository<Photos, String> {

}
 