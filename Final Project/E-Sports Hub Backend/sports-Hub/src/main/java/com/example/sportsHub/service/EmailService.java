package com.example.sportsHub.service;

import com.example.sportsHub.model.EmailDetails;

public interface EmailService {
 
   
    String sendSimpleMail(EmailDetails details);
 
   
    String sendMailWithAttachment(EmailDetails details);
}