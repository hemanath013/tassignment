package com.example.sportsHub.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.sportsHub.model.Branch;

@Repository
public interface BranchRepository extends MongoRepository<Branch, String> {
}
