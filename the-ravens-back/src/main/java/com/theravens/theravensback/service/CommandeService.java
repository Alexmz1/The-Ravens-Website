package com.theravens.theravensback.service;

import com.theravens.theravensback.model.Commande;
import com.theravens.theravensback.model.LignesCommande;
import com.theravens.theravensback.model.Produit;
import com.theravens.theravensback.repository.CommandeRepository;
import com.theravens.theravensback.repository.LignesCommandeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class CommandeService {

    @Autowired
    private CommandeRepository commandeRepository;

    @Autowired
    private LignesCommandeRepository lignesCommandeRepository;

    public List<Commande> getAll(){
        return this.commandeRepository.findAll();
    }

    public Commande add(Commande commande) {
        // Implémentez la logique pour ajouter la commande à la base de données
        // Assurez-vous de retourner la commande enregistrée avec un ID généré
        return commandeRepository.save(commande);
    }
}
