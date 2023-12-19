package com.example.supply_chain.service;

import java.io.IOException;
import java.util.List;

import com.example.supply_chain.model.style;
import org.springframework.web.multipart.MultipartFile;

public interface StyleServiceInterface {

	List<style> getAllStyle();
	style getById(String _id);
	void addData(style s);
	void updateData(style s);
	void deleteData(String id);
	List<style> getAllData();
	void deletebyId(long id);
	boolean existId(String styleUid);

//	String addPhoto(String title, MultipartFile image);

//	void getPhoto(String id);

//	void uploadImage(String documentId, byte[] imageData);

}
