package com.theravens.theravensback.service;

import com.theravens.theravensback.model.LignesCommande;
import com.theravens.theravensback.repository.LignesCommandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LignesCommandeService {

    @Autowired
    private LignesCommandeRepository lignesCommandeRepository;

    public List<LignesCommande> getAll(){
        return this.lignesCommandeRepository.findAll();
    }
}
