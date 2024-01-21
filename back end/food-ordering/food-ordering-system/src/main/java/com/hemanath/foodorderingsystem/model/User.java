package com.hemanath.foodorderingsystem.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Document(collection = "user")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class User {
    private String id;
    private String username;
    private String password;
    private Role role;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String address;

    private enum Role {
        ADMIN,
        CUSTOMER,
        STAFF,
        OWNER
    }
}
