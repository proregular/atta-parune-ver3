package com.green.attaparunever2.restaurant.restaurant_menu;

import com.green.attaparunever2.entity.RestaurantMenuCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantMenuCategoryRepository extends JpaRepository<RestaurantMenuCategory, Long> {
}
