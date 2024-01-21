 package com.example.supply_chain.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.supply_chain.model.UserEntity;
import com.example.supply_chain.repository.UserRepo;

@Service
public class UserEntityService implements UserDetailsService{

    @Autowired
    UserRepo repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserDetails userDetails = new UserEntity(repo.findByName(username));
        return userDetails;
    }

}
