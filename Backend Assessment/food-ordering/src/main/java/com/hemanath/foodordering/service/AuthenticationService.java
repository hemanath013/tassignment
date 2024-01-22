package com.hemanath.foodordering.service;

import org.springframework.http.ResponseEntity;

import com.hemanath.foodordering.model.AuthenticationRequest;
import com.hemanath.foodordering.model.AuthenticationResponse;
import com.hemanath.foodordering.model.RegisterRequest;

public interface AuthenticationService {
    
    ResponseEntity<AuthenticationResponse> register(RegisterRequest request);

    ResponseEntity<AuthenticationResponse> authenticate(AuthenticationRequest request);
}