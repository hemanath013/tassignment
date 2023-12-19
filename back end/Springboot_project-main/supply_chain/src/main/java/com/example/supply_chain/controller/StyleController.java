package com.example.supply_chain.controller;

import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.supply_chain.model.style;
import com.example.supply_chain.service.StyleServiceInterface;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/style")
public class StyleController {

	@Autowired
	StyleServiceInterface service;

	@GetMapping("/test")
	public String display() {
		return "hihello";
	}

	@GetMapping("/select-style")
	public ResponseEntity<List<style>> select() {
		List<style> list = service.getAllData();

		try {
			if (list != null) {
				ResponseEntity<List<style>> response = new ResponseEntity<>(list, HttpStatus.OK);
				return response;
			} else {
				ResponseEntity<List<style>> response = new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
				return response;
			}
		} catch (Exception e) {
			ResponseEntity<List<style>> response = new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			return response;
		}
	}

	@GetMapping("/select/stylebyId/{id}")
	public ResponseEntity<style> selectById(@PathVariable("id") String id) {

		style s = service.getById(id);

		try {
			if (s != null) {
				ResponseEntity<style> response = new ResponseEntity<>(s, HttpStatus.OK);
				return response;
			} else {
				ResponseEntity<style> response = new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
				return response;
			}
		} catch (Exception e) {
			ResponseEntity<style> response = new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			return response;
		}
	}

	@PostMapping("/add/style")
	public ResponseEntity<String> insert(@RequestBody style s) {

		boolean check = service.existId(s.getStyleUid());

		try {
			if (check == false) {
				service.addData(s);
				ResponseEntity<String> response = new ResponseEntity<>("Inserted Successfully", HttpStatus.CREATED);
				return response;
			} else {
				ResponseEntity<String> response = new ResponseEntity<>("Supplier Already Exists", HttpStatus.FORBIDDEN);
				return response;
			}
		} catch (Exception e) {
			ResponseEntity<String> response = new ResponseEntity<>("Internal Server Error",
					HttpStatus.INTERNAL_SERVER_ERROR);
			return response;
		}
	}

	@PutMapping("/update/style")
	public ResponseEntity<String> update(@RequestBody style s) {

		boolean check = service.existId(s.getStyleUid());

		try {
			if (check == true) {
				service.updateData(s);
				ResponseEntity<String> response = new ResponseEntity<>("Updated Successfully", HttpStatus.OK);
				return response;
			} else {
				ResponseEntity<String> response = new ResponseEntity<>("Supplier Not Exists", HttpStatus.FORBIDDEN);
				return response;
			}
		} catch (Exception e) {
			ResponseEntity<String> response = new ResponseEntity<>("Internal Server Error",
					HttpStatus.INTERNAL_SERVER_ERROR);
			return response;
		}
	}

	@DeleteMapping("/delete/style/{id}")
	public ResponseEntity<String> deleteById(@PathVariable("id") String id) {

		boolean check = service.existId(id);

		try {
			if (check == true) {
				service.deleteData(id);
				ResponseEntity<String> response = new ResponseEntity<>("Deleted Successfully", HttpStatus.OK);
				return response;
			} else {
				ResponseEntity<String> response = new ResponseEntity<>("Supplier Not Exists", HttpStatus.FORBIDDEN);
				return response;
			}
		} catch (Exception e) {
			ResponseEntity<String> response = new ResponseEntity<>("Internal Server Error",
					HttpStatus.INTERNAL_SERVER_ERROR);
			return response;
		}
	}

	@GetMapping("/select/style/dao")
	public List<style> getData() {
		return service.getAllData();
	}

	@DeleteMapping("/delete/stylebyId/{id}")
	public String deleteId(@PathVariable("id") String id) {
		style d = service.getById(id);
		if (d == null) {
			service.deleteData(id);
			return "Style not exist";
		} else {
			return "Deleted Successfully";
		}
	}

//	@PostMapping("/photos/add")
//	public String addPhoto(@RequestParam("title") String title, @RequestParam("image") MultipartFile image) throws IOException {
//		String id = service.addPhoto(title, image);
//		return "redirect:/photos/" + id;
//	}
//
//	@GetMapping("/photos/{id}")
//	public String getPhoto(@PathVariable String id) {
//		service.getPhoto(id);
//		return "photos";
//	}

	}

