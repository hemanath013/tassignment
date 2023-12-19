 package com.example.supply_chain.controller;

import java.io.IOException;
import java.io.InputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.supply_chain.service.impl.PhotoService;

@RestController
public class PhotoController {

    @Autowired
    PhotoService photoService;

    @PostMapping("/photos/add")
//    public String addPhoto(@RequestParam("title") String title, @RequestParam("image") MultipartFile image) throws IOException {
//        String id = photoService.addPhoto(title, image);
//        return "redirect:/photos/" + id;
//    }
    public ResponseEntity<String> addPhoto(@RequestPart(value = "file", required = false) MultipartFile file) {
        try {
            if (file == null || file.isEmpty()) {
                return ResponseEntity.badRequest().body("No file present in the request");
            }

            if (!isImage(file)) {
                return ResponseEntity.badRequest().body("Invalid image format");
            }

//            byte[] fileBytes = file.getBytes();
            photoService.addPhoto(file);
            return ResponseEntity.ok("Image uploaded successfully");
        } catch (IOException e) {
            return ResponseEntity.badRequest().body("Error uploading image" + e.getMessage());
        }
    }
        private boolean isImage (MultipartFile file){
            try (InputStream is = file.getInputStream()) {
                byte[] header = new byte[8];
                int bytesRead = is.read(header);
                if (bytesRead >= 2) {
                    return isImageByMagicNumber(header);
                } else {
                    return false;
                }
            } catch (IOException e) {
                return false;
            }
        }
        private boolean isImageByMagicNumber ( byte[] header){
            return startsWith(header, "image/png", (byte) 0x89, (byte) 0x50, (byte) 0x4E, (byte) 0x47, (byte) 0x0D, (byte) 0x0A, (byte) 0x1A, (byte) 0x0A) ||
                    startsWith(header, "image/jpeg", (byte) 0xFF, (byte) 0xD8, (byte) 0xFF) ||
                    startsWith(header, "image/gif", (byte) 0x47, (byte) 0x49, (byte) 0x46, (byte) 0x38) ||
                    startsWith(header, "image/bmp", (byte) 0x42, (byte) 0x4D);

        }
        private boolean startsWith ( byte[] bytes, String magicNumber,byte...prefix){
            for (int i = 0; i < prefix.length; i++) {
                if (bytes[i] != prefix[i]) {
                    return false;
                }
            }
            return true;
        }


//        @GetMapping("/photos/{id}")
//        public String getPhoto (@PathVariable String id){
//            photoService.getPhoto(id);
//            return "photos";
//        }
    }
 