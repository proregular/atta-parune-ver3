package com.green.attaparunever2.admin;


import com.green.attaparunever2.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository  extends JpaRepository<Admin, Long> {
}
