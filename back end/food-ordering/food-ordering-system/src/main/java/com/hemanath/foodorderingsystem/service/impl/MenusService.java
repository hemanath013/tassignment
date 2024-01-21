package com.hemanath.foodorderingsystem.service.impl;

import com.hemanath.foodorderingsystem.model.Menus;
import com.hemanath.foodorderingsystem.repository.MenusRepository;
import com.hemanath.foodorderingsystem.service.MenusServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenusService implements MenusServiceInterface {

    @Autowired
    private MenusRepository menuRepository;

    @Override
    public Menus getMenuById(String menuId) {
        return menuRepository.findById(menuId).orElse(null);
    }

    @Override
    public List<Menus> getAllMenus() {
        return menuRepository.findAll();
    }

    @Override
    public Menus createMenu(Menus menu) {
        return menuRepository.save(menu);
    }

    @Override
    public Menus updateMenu(String menuId, Menus updatedMenu) {
        return null;
    }
//    public Menus updateMenu(String menuId, Menus updatedMenu) {
//        Menus existingMenu = menuRepository.findById(menuId).orElse(null);
//        if (existingMenu != null) {
//            existingMenu.setName(updatedMenu.getName());
//            existingMenu.setPrice(updatedMenu.getPrice());
//            return menuRepository.save(existingMenu);
//        } else {
//            return null;
//        }
//    }

    public boolean deleteMenu(String menuId) {
        if (menuRepository.existsById(menuId)) {
            menuRepository.deleteById(menuId);
            return true;
        } else {
            return false;
        }
    }

    public List<Menus> searchMenusByName(String menuName) {
        return menuRepository.findByNameContainingIgnoreCase(menuName);
    }




}
