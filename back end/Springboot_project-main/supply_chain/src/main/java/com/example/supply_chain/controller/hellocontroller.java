package com.example.supply_chain.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;


@RestController
@RequestMapping("/demo/api")
public class hellocontroller {

    @GetMapping("/hello")
    public ResponseEntity<?> hello(HttpServletRequest req) {
        return ResponseEntity.ok("hello!");
    }

    @GetMapping("/greet")
    public ResponseEntity<?> greet() {
        return ResponseEntity.ok("Welcome");
    }
}