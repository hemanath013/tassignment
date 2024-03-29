package com.hemanath.foodordering.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class RegisterRequest {
    private String username;
    private String password;
    private Role role;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String address;
}
