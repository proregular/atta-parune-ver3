package com.green.attaparunever2.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
public class Code {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long code;

    @Column(length = 2)
    private String codeId;
    @Column(length = 10, nullable = false)
    private String name;
}