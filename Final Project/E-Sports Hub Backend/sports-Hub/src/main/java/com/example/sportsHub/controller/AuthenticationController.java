package com.example.sportsHub.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sportsHub.model.AuthenticationRequest;
import com.example.sportsHub.model.AuthenticationResponse;
import com.example.sportsHub.model.RegisterRequest;
import com.example.sportsHub.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin()
public class AuthenticationController {

    private final AuthenticationService service;
     
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
        @RequestBody RegisterRequest request) {
            // try{
            return service.register(request);
            // }
            // catch(Exception e){
            //     e.printStackTrace();
            //     return null;
            // }
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(
        @RequestBody AuthenticationRequest request){
            System.out.println(service.authenticate(request));
            return service.authenticate(request);
    }
}
