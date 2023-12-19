package com.example.supply_chain.controller.controller;

import com.example.supply_chain.controller.SuppliersController;
import com.example.supply_chain.model.Facilities;
import com.example.supply_chain.model.Suppliers;
import com.example.supply_chain.service.SupplierServiceInterface;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.web.client.HttpClientErrorException;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(value = SuppliersController.class)

public class SuppliersControllerTest {
    @Autowired
    MockMvc mockMvc;

    @MockBean
    @SpyBean
    SupplierServiceInterface supplier;

    @Test
    void getByIdTest() throws Exception {
        Suppliers sampleSupplier = new Suppliers("sup123", "sample@email.com", "3", "Location", "Type", "Material", "Style", "Supplier Name", "12345", "1");

        when(supplier.getById("12345")).thenReturn(sampleSupplier);

        mockMvc.perform(MockMvcRequestBuilders.get("/suppliers/select/suppliersbyId/12345"))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    void getByIdNotFoundTest() throws Exception {
        when(supplier.getById("12345")).thenReturn(null);

        mockMvc.perform(MockMvcRequestBuilders.get("/suppliers/select/suppliersbyId/12345"))
                .andExpect(MockMvcResultMatchers.status().isNoContent());
    }

    @Test
    void getAllData() throws Exception {

        List<Suppliers> sampleSupplier = List.of(new Suppliers("sup123", "sample@email.com", "3", "Location", "Type", "Material", "Style", "Supplier Name", "12345", "1"));

        when(supplier.getAllData()).thenReturn(sampleSupplier);

        mockMvc.perform(MockMvcRequestBuilders.get("/suppliers/select/suppliers"))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }
    @Test

    void getallNoData() throws Exception {
        when(supplier.getAllData()).thenReturn(null);

        mockMvc.perform(MockMvcRequestBuilders.get("/suppliers/select/suppliers"))
                .andExpect(MockMvcResultMatchers.status().isNoContent());
    }
}