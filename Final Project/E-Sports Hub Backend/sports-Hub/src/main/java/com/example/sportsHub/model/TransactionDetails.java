package com.example.sportsHub.model;

import lombok.AllArgsConstructor;
import lombok.Data;
 
@Data
@AllArgsConstructor
public class TransactionDetails {
 
	private String orderId;
	private String currency;
	private Integer amount;
}