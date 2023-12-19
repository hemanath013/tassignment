 package com.example.supply_chain.service.impl;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.util.List;

import com.example.supply_chain.service.impl.SupplierService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.supply_chain.model.Suppliers;
import com.example.supply_chain.repository.SuppliersRepository;

@ExtendWith(MockitoExtension.class)
public class SupplierServiceTest {

    @Mock
    private SuppliersRepository  repo;

    @InjectMocks
    SupplierService service;

    @Test
    public void getDataTest() throws Exception{

        List<Suppliers> sampleSupplier = List.of(new Suppliers("sup123", "sample@email.com", "3", "Location", "Type", "Material", "Style", "Supplier Name", "12345", "1"));

        Mockito.when(repo.findAll()).thenReturn(sampleSupplier);

        List<Suppliers> result = service.getAllData();

        assertEquals(sampleSupplier, result);


    }
    @Test
    public void getDataWrongTest() throws Exception{

        List<Suppliers> sampleSupplier = List.of(new Suppliers("sup123", "sample@email.com", "3", "Location", "Type", "Material", "Style", "Supplier Name", "12345", "1"));

        Mockito.when(repo.findAll()).thenThrow(RuntimeException.class);

        List<Suppliers> result = service.getAllData();

        assertNotEquals(sampleSupplier, result);


    }
}

