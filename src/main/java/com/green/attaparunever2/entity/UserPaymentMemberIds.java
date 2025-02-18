package com.green.attaparunever2.entity;

import jakarta.persistence.Embeddable;
import jakarta.persistence.EmbeddedId;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@Embeddable
@EqualsAndHashCode
public class UserPaymentMemberIds implements Serializable {
    private Long orderId;
    private Long userId;
}
