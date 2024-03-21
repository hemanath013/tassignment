package com.example.chart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.chart.model.user;
import com.example.chart.service.UserService;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<user> saveUser(@RequestBody user user) {
        user savedUser = userService.saveUser(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<user>> getAllUsers() {
        List<user> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<user> getUserById(@PathVariable String id) {
        Optional<user> userOptional = userService.getUserById(id);
        return userOptional.map(user -> new ResponseEntity<>(user, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<List<user>> getUsersByName(@PathVariable String name) {
        List<user> users = userService.getUsersByName(name);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/district/{district}")
    public ResponseEntity<List<user>> getUsersByDistrict(@PathVariable String district) {
        List<user> users = userService.getUsersByDistrict(district);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/location")
    public ResponseEntity<List<user>> getUsersWithinLocationRange(@RequestParam double minLat,
            @RequestParam double maxLat,
            @RequestParam double minLng, @RequestParam double maxLng) {
        List<user> users = userService.getUsersWithinLocationRange(minLat, maxLat, minLng, maxLng);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/month/{year}/{month}")
    public ResponseEntity<List<user>> getUsersByMonth(@PathVariable int year, @PathVariable int month) {
        List<user> users = userService.getUsersByMonth(year, month);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

@GetMapping("/date/between")
public ResponseEntity<List<user>> getUsersBetweenDates(@RequestParam String startDate, @RequestParam String endDate) {
    try {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date parsedStartDate = dateFormat.parse(startDate);
        Date parsedEndDate = dateFormat.parse(endDate);
        
        List<user> users = userService.getUsersBetweenDates(parsedStartDate, parsedEndDate);
   
        return new ResponseEntity<>(users, HttpStatus.OK);
    } catch (ParseException e) {
        // Handle parsing exception
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}


}
