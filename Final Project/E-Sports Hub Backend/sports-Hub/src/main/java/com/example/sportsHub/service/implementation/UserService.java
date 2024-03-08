package com.example.sportsHub.service.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sportsHub.model.Role;
import com.example.sportsHub.model.User;
import com.example.sportsHub.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(String id) {
        return userRepository.findById(id);
    }

    public Optional<User> getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(String id, User user) {
        if (userRepository.existsById(id)) {
            user.setUser_id(id);
            return userRepository.save(user);
        } else {
            return null;
        }
    }

    public boolean deleteUser(String id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }


    // New method to retrieve users who placed specific orders
    // public List<User> getUsersByPlacedOrders() {
    //     return userRepository.findUsersByPlacedOrders();
    // }


    public List<User> getUsersByUsernameAscendingOrder() {
        return userRepository.findByOrderByUsernameAsc();
    }

    public List<User> getUsersByUsernameDescendingOrder() {
        return userRepository.findByOrderByUsernameDesc();
    }

    public List<User> getUsersByPhone(String phone) {
        return userRepository.findByPhone(phone);
    }

    public List<User> getUsersByRole(Role role) {
        return userRepository.findByRole(role);
    }



}
