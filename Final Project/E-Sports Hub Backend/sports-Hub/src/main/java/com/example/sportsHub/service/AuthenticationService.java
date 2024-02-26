package com.example.sportsHub.service;

import org.springframework.http.ResponseEntity;

import com.example.sportsHub.model.AuthenticationRequest;
import com.example.sportsHub.model.AuthenticationResponse;
import com.example.sportsHub.model.RegisterRequest;



public interface AuthenticationService {
    
    ResponseEntity<AuthenticationResponse> register(RegisterRequest request);

    ResponseEntity<AuthenticationResponse> authenticate(AuthenticationRequest request);
}