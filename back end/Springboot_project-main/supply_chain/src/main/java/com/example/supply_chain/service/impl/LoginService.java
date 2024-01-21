 package com.example.supply_chain.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.supply_chain.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.supply_chain.model.User;


import io.jsonwebtoken.*;

@Service
public class LoginService{

    @Autowired
    UserRepo repo;

    @Autowired
    PasswordEncoder passwordEncoder;

    public String generateToken(String userName,String password) {
        Map<String,Object> map = new HashMap<>();
        String role = "admin";
        map.put("Role", role);

        Claims claims = Jwts.claims().setSubject(userName);
        claims.putAll(map);

        String token = Jwts.builder().setClaims(claims).signWith(SignatureAlgorithm.HS256, "test").compact();

        System.out.println(token);
        return token;
    }

    public boolean validateToken(String token,String name){

        String token1 = generateToken(name, "");
        if(token.equals(token1)){
            return true;
        }
        return false;
    }

    public String generateRole(String name , String role) {
        String token = generateToken(name,"");
        Claims claim = Jwts.parser().setSigningKey("test").parseClaimsJws(token).getBody();
        String rolefunction = claim.get("Role").toString();
        System.out.println(rolefunction);
        return rolefunction;
    }

    public boolean validateRole(String token ,String name, String role) {
        if(role.equals(generateRole(name,role))) {
            return true;
        }
        return false;
    }

    public User saveUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return repo.save(user);
    }

    public List<User> getUser() {
        return repo.findAll();
    }

}
