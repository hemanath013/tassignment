package com.example.sportsHub.service.implementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.sportsHub.model.AuthenticationRequest;
import com.example.sportsHub.model.AuthenticationResponse;
import com.example.sportsHub.model.EmailDetails;
import com.example.sportsHub.model.RegisterRequest;
import com.example.sportsHub.model.Role;
import com.example.sportsHub.model.User;
import com.example.sportsHub.repository.UserRepository;
import com.example.sportsHub.service.AuthenticationService;
import com.example.sportsHub.service.EmailService;
import com.example.sportsHub.service.JwtService;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor

public class AuthenticationServiceImplementation implements AuthenticationService {

        @Autowired
	EmailService service2;

        private final UserRepository userRepository;
        private final PasswordEncoder passwordEncoder;
        private final JwtService jwtService;
        private final AuthenticationManager authenticationManager;

        public ResponseEntity<AuthenticationResponse> register(RegisterRequest request) {
                User user = User.builder()
                                .user_id(request.getUser_id())
                                .username(request.getUsername())
                                .email(request.getEmail())
                                .phone(request.getPhone())
                                .address(request.getAddress())
                                .password(passwordEncoder.encode(request.getPassword()))
                                .build();
              
                        user.setRole(Role.CUSTOMER);
                
                User savedUser;
                try {
                        if (userRepository.existsByUsername(user.getUsername())) {
                                throw new Exception("Username or email already exists.");
                        }
                        savedUser = userRepository.save(user);
                } catch (Exception e) {
                        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
                }
                String jwtToken = jwtService.generateToken(savedUser);

EmailDetails emailDetails = EmailDetails.builder().recipient(user.getEmail())
				.subject("Thank You for Your News Submission")
				.msgBody("")
				.build();
 
		service2.sendSimpleMail(emailDetails);

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
                String jwtToken = jwtService.generateToken(user);
                return new ResponseEntity<>(AuthenticationResponse.builder()
                                .token(jwtToken)
                                .build(), HttpStatus.OK);
        }

}