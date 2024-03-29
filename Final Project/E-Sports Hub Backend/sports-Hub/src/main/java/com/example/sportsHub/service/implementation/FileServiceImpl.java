package com.example.sportsHub.service.implementation;


import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.sportsHub.service.FileService;



@Service
public class FileServiceImpl implements FileService{

    @Override
    public String saveFile(MultipartFile file, String folder) {
        String url = "";
        String a=file.getContentType();
        String date = LocalDateTime.now().toString();
        date = date.replaceAll("\\s", "-");
        date = date.replaceAll(":", "-");
        System.out.println(date + "  --  " + folder);
        if(a!=null && a.startsWith("image")){
            url = "http://localhost:8080/static/images/" + folder + "/" + date;
            try {
                file.transferTo(new File(folder + "/" +date));
            } catch (IllegalStateException | IOException e) {
                e.printStackTrace();
            }
        }
        else{
            return "";
        }
        return url;
    }
    
}