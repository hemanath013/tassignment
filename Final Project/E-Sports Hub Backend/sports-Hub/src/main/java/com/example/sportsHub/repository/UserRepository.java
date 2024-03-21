package com.example.sportsHub.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.sportsHub.model.Role;
import com.example.sportsHub.model.User;



@Repository

public interface UserRepository extends MongoRepository<User, String>{

    boolean existsByUsername(String username);

    Optional<User> findByUsername(String username);

    List<User> findByOrderByUsernameAsc();

    List<User> findByOrderByUsernameDesc();

    List<User> findByPhone(String phone);

    List<User> findByRole(Role role);

    boolean existsByEmail(String email);

    // List<User> findAllByOrderByNameAsc();

    // List<User> findAllByOrderByNameDesc();



    //List<User> findByPlacedOrders();

}
