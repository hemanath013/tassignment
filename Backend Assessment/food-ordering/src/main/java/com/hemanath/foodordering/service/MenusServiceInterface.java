package com.hemanath.foodordering.service;

import java.util.List;
import java.util.Optional;

import com.hemanath.foodordering.model.Menus;

public interface MenusServiceInterface  {
     List<Menus> getAllMenus();

    Optional<Menus> getMenuById(String id);

    Menus addMenu(Menus menu);

    Menus updateMenu(String id, Menus menu);

    boolean deleteMenu(String id);

    List<Menus> searchMenusByName(String name);
   
}
