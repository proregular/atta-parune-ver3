package com.green.attaparunever2.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@ToString
public class MealTime extends UpdatedAt{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long mealTimeId;

    @ManyToOne
    @JoinColumn(name = "reservation_id", nullable = false)
    private Reservation reservationId;

    @ManyToOne
    @JoinColumn(name = "restaurant_id", nullable = false)
    private Restaurant restaurantId;

    @Column
    private LocalDateTime startMealTime;

    @Column
    private LocalDateTime endMealTime;
}