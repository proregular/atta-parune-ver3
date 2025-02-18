package com.green.attaparunever2.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Review extends UpdatedAt{
    @Id
    @OneToOne
    @JoinColumn(name = "order_id", referencedColumnName = "order_id", nullable = false)
    private Order order;

    @Column(nullable = false)
    private int rating;

    @Column(nullable = false, length = 200)
    private String reviewText;
}
