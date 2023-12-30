package com.example.supply_chain.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.supply_chain.service.impl.LoginService;

import jakarta.servlet.http.HttpServletRequest;

@RestController

public class LoginController {

    @Autowired

    LoginService login;

    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<String> exceptionHandler(Exception e) {
        return new ResponseEntity<>("throws exception", HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/login")

    public String login(@RequestParam String userName , @RequestParam String password) {

        return login.generateToken(userName, password);

    }

    @GetMapping("/verify")

    public String getMethodName(HttpServletRequest request, @RequestParam String name) {

        //System.out.println("test:"+request.getHeader("Authorization"));

        return login.validateToken(request.getHeader("Authorization").split(" ",2)[1],name);

    }

}