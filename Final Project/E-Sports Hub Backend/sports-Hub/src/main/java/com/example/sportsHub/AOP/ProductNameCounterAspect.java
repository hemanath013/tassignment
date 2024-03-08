package com.example.sportsHub.AOP;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class ProductNameCounterAspect {

    private int count = 0;

    @Before("execution(* com.example.sportsHub.service.ProductService.getProductsByName(..))")
    public void countProductsByName() {
        count++;
        
    }

    public int getCount() {
        return count; 
    }
}

