package com.example.supply_chain.service.impl;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.supply_chain.model.Photos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.example.supply_chain.dao.DaoInterface;
import com.example.supply_chain.model.style;
import com.example.supply_chain.repository.StyleRepository;
import com.example.supply_chain.service.StyleServiceInterface;
import org.springframework.web.multipart.MultipartFile;

@Service
public class StyleService implements StyleServiceInterface {

	@Autowired
	StyleRepository repo;


	@Autowired
	DaoInterface dao;
	;

	public List<style> getAllStyle() {
		List<style> list = new ArrayList<>();
		list = repo.findAll();
		return list;
	}

	public style getById(String _id) {
//		List<style> list = repo.findBy_id(_id);
		Optional<style> result = repo.findById(_id);
		return result.get();
	}

	public void addData(style s) {
//		boolean check = dao.checkStyle(s.get_id());
//		
//		if(check == false) {
		repo.save(s);
//		return true;
//		}else {
//			return false;
//		}
	}

	public boolean existId(String styleUid) {
		return repo.existsBystyleUid(styleUid);
	}


	//@Override
	public void uploadImage(String documentId, byte[] imageData) {

	}

	public void updateData(style s) {
		dao.updateStyle(s);
	}

	public void deleteData(String _id) {
		repo.deleteBy_id(_id);
	}

	public List<style> getAllData() {
		return dao.getAllData();

	}

	@Override
	public void deletebyId(long id) {
		dao.deleteStyle(id);
	}
}
//	public void uploadImage(String documentId, byte[] imageData) {
//		style existingDocument =repo.findById(documentId).orElse(null);
//
//		if (existingDocument != null) {
//			existingDocument.setImageData(imageData);
//			repo.save(existingDocument);
//		} else {
//			// Handle the case where the document with the given ID is not found
//		}
//	}
//	private final String 	FOLDER_PATH="C:/Users/STARIM/Desktop/2/FULL STACK/back end/Springboot_project-main/supply_chain/src/main/resources/image/";
//public String uploadImageToFileSystem(style syle,MultipartFile file) throws IOException {
//	String filePath=FOLDER_PATH+file.getOriginalFilename();
//
//	syle.setFilePath(filePath);
//	updateData(syle);
//	file.transferTo(new File(filePath));
//
//	if (syle != null) {
//		return "file updated successfully : " + filePath;
//	}
//	return null;
//}
//@Value("${upload.folder}")
//String upload;
//
//	public String addPhoto(String title, MultipartFile file) throws IOException {
//		Photos photo = new Photos(title,upload);
//
//		Files.copy(file.getInputStream(), Paths.get(upload+File.separator+file.getOriginalFilename()), StandardCopyOption.REPLACE_EXISTING);
//
//		//repo.save(photo);
//		return "Success";
//	}
//
//	public Photos getPhoto(String id) {
//		return repo.findById(id).get();
//	}
//
//}

