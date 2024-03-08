package com.example.sportsHub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.sportsHub.model.TransactionDetails;
import com.example.sportsHub.service.implementation.TransactionService;



 
@RestController
@RequestMapping("/transaction")
@CrossOrigin
public class TransactionController {
	@Autowired
	TransactionService service;
 
	@GetMapping("/createTransaction/{amount}")
	public TransactionDetails createTransaction(@PathVariable Double amount) {
		return service.createTransaction(amount);
	}
}