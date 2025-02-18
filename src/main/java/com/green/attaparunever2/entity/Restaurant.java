package com.green.attaparunever2.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
public class Restaurant extends UpdatedAt{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long restaurantId;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private RestaurantCategory categoryId;

    @Column(length = 50, nullable = false)
    private String restaurantName;

    @Column(length = 200, nullable = false)
    private String restaurantAddress;

    @Column(length = 20, nullable = false)
    private String restaurantNumber;

    @Column(length = 20)
    private String operatingHours;

    @Column(length = 50)
    private String restaurantDescription;

    @Column(nullable = false, columnDefinition = "int default 0")
    private int status;

    @Column(nullable = false)
    private int maxCapacity;

    @Column(nullable = false)
    private double lat;

    @Column(nullable = false)
    private double lng;

    @Column
    private String paymentPassword;

}
