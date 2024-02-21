package com.hemanath.foodordering.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "role_permissions")
public class RolePermissions {
     @Id
    private String _id;
     @DocumentReference(collection = "Permissions")
    @Field("role_permissions")
    private List<Permissions> rolePermissions;

}
