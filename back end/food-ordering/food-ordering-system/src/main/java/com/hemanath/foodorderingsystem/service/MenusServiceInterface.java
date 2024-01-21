package com.hemanath.foodorderingsystem.service;

import com.hemanath.foodorderingsystem.model.Menus;

import java.util.List;

public interface MenusServiceInterface {
    Menus getMenuById(String menuId);
    List<Menus> getAllMenus();
    Menus createMenu(Menus menu);

    Menus updateMenu(String menuId, Menus updatedMenu);
    boolean deleteMenu(String menuId);
    List<Menus> searchMenusByName(String menuName);
}
