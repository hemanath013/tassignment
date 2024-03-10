package com.example.sportsHub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.sportsHub.model.Role;
import com.example.sportsHub.model.User;
import com.example.sportsHub.service.implementation.UserService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin()
@RequestMapping("/api/users")
@PreAuthorize ("hasRole('ADMIN')")
public class UserController {

    @Autowired
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable String userId) {
        Optional<User> user = userService.getUserById(userId);
        return user.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/byUsername/{username}")
    @PreAuthorize ("hasRole('ADMIN') or hasRole('OWNER')")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
        Optional<User> user = userService.getUserByUsername(username);
        return user.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{userId}")
    @PreAuthorize ("hasRole('ADMIN') or hasRole('OWNER') or hasRole('CUSTOMER')")
    public ResponseEntity<User> updateUser(@PathVariable String userId, @RequestBody User user) {
        User updatedUser = userService.updateUser(userId, user);
        return updatedUser != null ? new ResponseEntity<>(updatedUser, HttpStatus.OK) :
                new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable String userId) {
        boolean deleted = userService.deleteUser(userId);
        return deleted ? new ResponseEntity<>(HttpStatus.NO_CONTENT) :
                new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    // @GetMapping("/byPlacedOrders")
    // @PreAuthorize ("hasRole('ADMIN') or hasRole('OWNER')")
    // public ResponseEntity<List<User>> getUsersByPlacedOrders() {
    //     List<User> users = userService.getUsersByPlacedOrders();
    //     return new ResponseEntity<>(users, HttpStatus.OK);
    // }

    @GetMapping("/username/asc")
    public ResponseEntity<List<User>> getUsersByUsernameAscendingOrder() {
        List<User> users = userService.getUsersByUsernameAscendingOrder();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/username/desc")
    public ResponseEntity<List<User>> getUsersByUsernameDescendingOrder() {
        List<User> users = userService.getUsersByUsernameDescendingOrder();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/phone/{phone}")
    public ResponseEntity<List<User>> getUsersByPhone(@PathVariable String phone) {
        List<User> users = userService.getUsersByPhone(phone);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/role/{role}")
    public ResponseEntity<List<User>> getUsersByRole(@PathVariable Role role) {
        List<User> users = userService.getUsersByRole(role);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

}
