package com.example.chart.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.chart.model.user;
import com.example.chart.repository.UserRepository;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public user saveUser(user user) {
        return userRepository.save(user);
    }
    

    public Optional<user> getUserById(String id) {
        return userRepository.findById(id);
    }

    public List<user> getUsersByName(String name) {
        return userRepository.findByUserName(name);
    }

    public List<user> getUsersByDistrict(String district) {
        return userRepository.findByDistrict(district);
    }


    public List<user> getUsersByMonth(int year, int month) {
        Calendar calendar = Calendar.getInstance();
        calendar.set(year, month - 1, 1);
        Date startDate = calendar.getTime();

        calendar.set(Calendar.DAY_OF_MONTH, calendar.getActualMaximum(Calendar.DAY_OF_MONTH));
        Date endDate = calendar.getTime();

        return userRepository.findByDateIsBetween(startDate, endDate);
    }

  

    public List<user> getUsersWithinLocationRange(double minLat, double maxLat, double minLng, double maxLng) {
        return userRepository.findByLatitudeBetweenAndLongitudeBetween(minLat, maxLat, minLng, maxLng);
    }

     public List<user> getAllUsers() {
        return userRepository.findAll();
    }

  
    

    public List<user> getUsersBetweenDates(Date startDate, Date endDate) {
        System.out.println(startDate + " " +endDate);
        return userRepository.findByDateBetween(startDate, endDate);
    }

  
    
}
