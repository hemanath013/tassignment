package com.example.supply_chain.photos;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.supply_chain.model.Photos;
import com.example.supply_chain.repository.PhotoRepository;

@SpringBootTest
public class PhotoServiceTest {

    @Autowired
    private PhotoRepository photoRepository;

    @Test
    public void testAddPhoto() {

        Photos photo = new Photos();
        photo.setDescription("Sample photo description");
        Photos savedPhoto = photoRepository.save(photo);
        assertNotNull(savedPhoto.getId(), "Saved photo ID should not be null");
    }
}
