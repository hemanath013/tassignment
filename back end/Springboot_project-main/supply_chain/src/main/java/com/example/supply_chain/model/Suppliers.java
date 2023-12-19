
		package com.example.supply_chain.model;

import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;

import lombok.Data;

@Document(collection = "suppliers")

@Data

@AllArgsConstructor

public class Suppliers {

	@Id

	private String _id;

	@Field("email_id")

	private String emailId;

	private String facilities;

	private String location;

	@Field("material_type")

	private String materialType;

	@Field("raw_material")

	private String rawMaterial;

	private String styles;

	@Field("supplier_name")

	private String supplierName;

	@Field("supplier_uid")

	private String supplierUid;

	private String tier;

//	@Data

//	@AllArgsConstructor

//	public class Location{

//		private String address;

//		private String country;

//		private String pincode;

//		private String region;

//		private String state;

//	}

}
