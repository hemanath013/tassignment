 package com.example.supply_chain.filter;

import java.io.IOException;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClientException;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Jwts;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class AuthFilter extends OncePerRequestFilter {

    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey("test").parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain filterchain)
            throws ServletException, IOException {

        String header = req.getHeader("Authorization");
        if(header==null || !header.startsWith("Bearer ")) {
            filterchain.doFilter(req, res);
            return;
        }
        String token=header.substring(7);
        if (!validateToken(token)) {
            throw new RestClientException("exception");
        }
        filterchain.doFilter(req, res);

    }

}

