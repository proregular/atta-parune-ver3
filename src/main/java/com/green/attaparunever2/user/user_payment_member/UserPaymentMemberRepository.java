package com.green.attaparunever2.user.user_payment_member;

import com.green.attaparunever2.entity.UserPaymentMember;
import com.green.attaparunever2.entity.UserPaymentMemberIds;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserPaymentMemberRepository extends JpaRepository<UserPaymentMember, UserPaymentMemberIds> {
}
