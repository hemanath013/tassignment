package com.example.sportsHub.model;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class RegisterRequest {
    private String user_id;
    private String username;
    private String email;
    private String password; 
    private Role role;
    private String address;
    private String phone;
}
