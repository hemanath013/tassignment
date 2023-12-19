 package com.example.supply_chain.service.impl;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.supply_chain.model.Photos;
import com.example.supply_chain.repository.PhotoRepository;

@Service
public class PhotoService {

    @Autowired
    private PhotoRepository photoRepo;


    public String addPhoto(MultipartFile file) throws IOException {
        String originalFilename = file.getOriginalFilename();

        Photos photo = new Photos();
        photo.setFileName(originalFilename);
        photo.setData(file.getBytes());

        Photos savedPhoto = photoRepo.save(photo);

        if (savedPhoto != null) {
            return savedPhoto.getId();
        } else {
            // Handle the case where saving the photo failed
            throw new RuntimeException("Failed to save the photo");
        }

//    public Photos getPhoto(String id) {
//        return photoRepo.findById(id).get();
//    }


    }
}