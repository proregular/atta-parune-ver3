package com.green.attaparunever2.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
public class RestaurantMenu extends UpdatedAt{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long menuId;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private RestaurantMenuCategory categoryId;

    @Column(length = 20, nullable = false)
    private String menuName;

    @Column(length = 100, nullable = false)
    private String pic;

    @Column(nullable = false)
    private int price;

    @Column(length = 100)
    private String detail;

    @Column(nullable = false)
    private int available;

    @Column(nullable = false)
    private int useYn;

}
