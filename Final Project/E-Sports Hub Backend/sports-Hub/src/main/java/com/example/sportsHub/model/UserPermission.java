package com.example.sportsHub.model;


import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "user_permissions")
public class UserPermission {
    @Id
    private String _id;
    @DocumentReference(collection = "role_permission")
    @Field("user_permissions")
    private List<RolePermissions> userPermissions;
}