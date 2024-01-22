package com.hemanath.foodordering.service.implementation;

import com.hemanath.foodordering.model.Menus;
import com.hemanath.foodordering.repository.MenusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class MenusService {

    private final MenusRepository menusRepository;

    @Autowired
    public MenusService(MenusRepository menusRepository) {
        this.menusRepository = menusRepository;
    }

    public List<Menus> getAllMenus() {
        try {
            return menusRepository.findAll();
        } catch (Exception e) {
            e.printStackTrace();
            return Collections.emptyList();
        }
    }

    public Optional<Menus> getMenuById(String id) {
        try {
            return menusRepository.findById(id);
        } catch (Exception e) {
            e.printStackTrace();
            return Optional.empty();
        }
    }

    public Menus addMenu(Menus menu) {
        try {
            return menusRepository.save(menu);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to add menu. Please check the data and try again.");
        }
    }

    public Menus updateMenu(String id, Menus menu) {
        try {
            if (menusRepository.existsById(id)) {
                menu.set_id(id);
                return menusRepository.save(menu);
            } else {
                return null;
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to update menu. Please check the data and try again.");
        }
    }

    public boolean deleteMenu(String id) {
        try {
            if (menusRepository.existsById(id)) {
                menusRepository.deleteById(id);
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to delete menu. Please check the data and try again.");
        }
    }

    public List<Menus> searchMenusByName(String name) {
        try {
            return menusRepository.findByNameContainingIgnoreCase(name);
        } catch (Exception e) {
            e.printStackTrace();
            return Collections.emptyList();
        }
    }

    // New method to retrieve menus for a specific restaurant
    public List<Menus> getMenusByRestaurantId(String restaurantId) {
        return menusRepository.findByRestaurantId(restaurantId);
    }

    
    // New method to search for menus based on a particular dish
    public List<Menus> searchMenusByDish(String dish) {
        return menusRepository.findByNameContainingIgnoreCase(dish);
    }

      // New method to search for menus based on a price range
      public List<Menus> searchMenusByPriceRange(int minPrice, int maxPrice) {
        return menusRepository.findByPriceBetween(minPrice, maxPrice);
    }


}
