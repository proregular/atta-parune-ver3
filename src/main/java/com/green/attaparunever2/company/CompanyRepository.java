package com.green.attaparunever2.company;

import com.green.attaparunever2.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
    @Query("SELECT c.companyCd FROM Company c ORDER BY c.companyCd DESC")
    String findLatestCompanyCd();
}
