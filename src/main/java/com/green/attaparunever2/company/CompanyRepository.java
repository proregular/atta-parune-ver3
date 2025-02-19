package com.green.attaparunever2.company;

import com.green.attaparunever2.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, Long> {
}
