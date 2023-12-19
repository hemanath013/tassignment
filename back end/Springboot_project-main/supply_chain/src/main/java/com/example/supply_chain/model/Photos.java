
        package com.example.supply_chain.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "photos")
public class Photos {

//    public Photos(String title2, String upload) {
//        this.title=title2;
//        this.image=upload;
//    }

    @Id
    private String id;

    private String fileName;

    private byte[] data;;

    public void setDescription(String samplePhotoDescription) {
    }
}
 