package com.theravens.theravensback.service;

import com.theravens.theravensback.model.Commande;
import com.theravens.theravensback.repository.CommandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommandeService {

    @Autowired
    private CommandeRepository commandeRepository;

    public List<Commande> getAll(){
        return this.commandeRepository.findAll();
    }
}
