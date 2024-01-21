package com.hemanath.foodorderingsystem.controller;

import com.hemanath.foodorderingsystem.model.Menus;
import com.hemanath.foodorderingsystem.service.impl.MenusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/api/menus")
public class MenusController {

    @Autowired
    private MenusService menuService;

    @GetMapping("/{menuId}")
    public ResponseEntity<Menus> getMenuById(@PathVariable String menuId) {
        Menus menu = menuService.getMenuById(menuId);
        if (menu != null) {
            return new ResponseEntity<>(menu, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Menus>> getAllMenus() {
        List<Menus> menus = menuService.getAllMenus();
        return new ResponseEntity<>(menus, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Menus> createMenu(@RequestBody Menus menu) {
        Menus createdMenu = menuService.createMenu(menu);
        return new ResponseEntity<>(createdMenu, HttpStatus.CREATED);
    }

    @PutMapping("/update/{menuId}")
    public ResponseEntity<Menus> updateMenu(@PathVariable String menuId, @RequestBody Menus updatedMenu) {
        Menus menu = menuService.updateMenu(menuId, updatedMenu);
        if (menu != null) {
            return new ResponseEntity<>(menu, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{menuId}")
    public ResponseEntity<String> deleteMenu(@PathVariable String menuId) {
        boolean deleted = menuService.deleteMenu(menuId);
        if (deleted) {
            return new ResponseEntity<>("Menu deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Menu not found", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/search")
    public ResponseEntity<List<Menus>> searchMenusByName(@RequestParam String menuName) {
        List<Menus> menus = menuService.searchMenusByName(menuName);
        if (!menus.isEmpty()) {
            return new ResponseEntity<>(menus, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
