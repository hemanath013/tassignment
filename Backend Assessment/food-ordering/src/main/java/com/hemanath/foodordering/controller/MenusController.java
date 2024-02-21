package com.hemanath.foodordering.controller;

import com.hemanath.foodordering.model.Menus;
import com.hemanath.foodordering.service.implementation.MenusService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/menus")
@PreAuthorize ("hasRole('ADMIN') or hasRole('OWNER') or hasRole('STAFF') or hasRole('CUSTOMER')")
public class MenusController {

    @Autowired
    private final MenusService menusService;

    public MenusController(MenusService menusService) {
        this.menusService = menusService;
    }
     
   
    @GetMapping
    public ResponseEntity<List<Menus>> getAllMenus() {
        List<Menus> menus = menusService.getAllMenus();
        return new ResponseEntity<>(menus, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Menus> getMenuById(@PathVariable String id) {
        Optional<Menus> menu = menusService.getMenuById(id);
        return menu.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/postMenu")
    @PreAuthorize ("hasRole('ADMIN') or hasRole('OWNER')")
    public ResponseEntity<Menus> createMenu(@RequestBody Menus menu) {
        try {
            Menus createdMenu = menusService.addMenu(menu);
            return new ResponseEntity<>(createdMenu, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    @PreAuthorize ("hasRole('ADMIN') or hasRole('OWNER')")
    public ResponseEntity<Menus> updateMenu(@PathVariable String id, @RequestBody Menus menu) {
        try {
            Menus updatedMenu = menusService.updateMenu(id, menu);
            return updatedMenu != null
                    ? new ResponseEntity<>(updatedMenu, HttpStatus.OK)
                    : new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize ("hasRole('ADMIN') or hasRole('OWNER')")
    public ResponseEntity<Void> deleteMenu(@PathVariable String id) {
        boolean deleted = menusService.deleteMenu(id);
        return deleted
                ? new ResponseEntity<>(HttpStatus.NO_CONTENT)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Menus>> searchMenusByName(@RequestParam String name) {
        List<Menus> menus = menusService.searchMenusByName(name);
        return new ResponseEntity<>(menus, HttpStatus.OK);
    }

    
    @GetMapping("/byRestaurant/{restaurantId}")
    public ResponseEntity<List<Menus>> getMenusByRestaurantId(@PathVariable String restaurantId) {
        List<Menus> menus = menusService.getMenusByRestaurantId(restaurantId);
        return new ResponseEntity<>(menus, HttpStatus.OK);
    }

    @GetMapping("/searchByDish")
    public ResponseEntity<List<Menus>> searchMenusByDish(@RequestParam String dish) {
        List<Menus> menus = menusService.searchMenusByDish(dish);
        return new ResponseEntity<>(menus, HttpStatus.OK);
    }

    @GetMapping("/searchByPriceRange")
    public ResponseEntity<List<Menus>> searchMenusByPriceRange(
            @RequestParam int minPrice, @RequestParam int maxPrice) {
        List<Menus> menus = menusService.searchMenusByPriceRange(minPrice, maxPrice);
        return new ResponseEntity<>(menus, HttpStatus.OK);
    }
}
