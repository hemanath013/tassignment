package com.example.chart.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.chart.model.user;
import java.util.Date;
import java.util.List;

public interface UserRepository extends MongoRepository<user, String> {
    List<user> findByUserName(String userName);
    List<user> findByDistrict(String district);
    List<user> findByLatitudeBetweenAndLongitudeBetween(double minLat, double maxLat, double minLng, double maxLng);
    List<user> findByDateBetween(java.util.Date startDate, java.util.Date endDate);
    List<user> findByDateIsBetween(Date startDate, Date endDate);
    

}
