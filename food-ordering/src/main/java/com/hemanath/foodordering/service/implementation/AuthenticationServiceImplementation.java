package com.hemanath.foodordering.service.implementation;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hemanath.foodordering.model.AuthenticationRequest;
import com.hemanath.foodordering.model.AuthenticationResponse;
import com.hemanath.foodordering.model.RegisterRequest;
import com.hemanath.foodordering.model.Role;
import com.hemanath.foodordering.model.User;
import com.hemanath.foodordering.repository.UserRepository;
import com.hemanath.foodordering.service.AuthenticationService;
import com.hemanath.foodordering.service.JwtService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class AuthenticationServiceImplementation implements AuthenticationService {

        private final UserRepository userRepository;
        private final PasswordEncoder passwordEncoder;
        private final JwtService jwtService;
        private final AuthenticationManager authenticationManager;
        // private String username;
        // private String password;
        // private Role role;
        // private String firstName;
        // private String lastName;
        // private String phoneNumber;
        // private String address;

        public ResponseEntity<AuthenticationResponse> register(RegisterRequest request) {
                User user = User.builder()
                                .firstName(request.getFirstName())
                                .lastName(request.getLastName())
                                .username(request.getUsername())
                                .phoneNumber(request.getPhoneNumber())
                                .address(request.getAddress())
                                .password(passwordEncoder.encode(request.getPassword()))
                                .build();

                if (user.getUsername().endsWith("_admin")) {
                        user.setRole(Role.ADMIN);
                } else if (user.getUsername().endsWith("_staff")) {
                        user.setRole(Role.STAFF);
                } else if (user.getUsername().endsWith("_owner")) {
                        user.setRole(Role.STAFF);
                } 
                else {
                        user.setRole(Role.CUSTOMER);
                }
                User savedUser;
                try {
                        if (userRepository.existsByUsername(user.getUsername())) {
                                throw new Exception("Username or email already exists.");
                        }
                        savedUser = userRepository.save(user);
                } catch (Exception e) {
                        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
                }

                Map<String, Object> extraClaims = new HashMap<>();
                extraClaims.put("Authorities", user.getAuthorities());
                String jwtToken = jwtService.generateToken(savedUser);

                return new ResponseEntity<>(AuthenticationResponse.builder()
                                .token(jwtToken)
                                .build(), HttpStatus.OK);
        }

        public ResponseEntity<AuthenticationResponse> authenticate(AuthenticationRequest request) {
                
                authenticationManager.authenticate(
                                new UsernamePasswordAuthenticationToken(
                                                request.getUsername(),
                                                request.getPassword()));

                User user = userRepository.findByUsername(request.getUsername())
                                .orElseThrow(() -> new UsernameNotFoundException("Username or Password invalid"));

                Map<String, Object> extraClaims = new HashMap<>();
                extraClaims.put("Authorities", user.getAuthorities());
                String jwtToken = jwtService.generateToken(extraClaims, user);
                return new ResponseEntity<>(AuthenticationResponse.builder()
                                .token(jwtToken)
                                .build(), HttpStatus.OK);
        }

}