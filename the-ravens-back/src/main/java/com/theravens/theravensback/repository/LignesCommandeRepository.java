package com.theravens.theravensback.repository;

import com.theravens.theravensback.model.LignesCommande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LignesCommandeRepository extends JpaRepository<LignesCommande, Integer> {
}
