package com.green.attaparunever2.user;

import com.green.attaparunever2.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
