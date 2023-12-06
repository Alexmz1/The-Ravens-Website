package com.theravens.theravensback.controller;

import com.theravens.theravensback.model.Commande;
import com.theravens.theravensback.model.LignesCommande;
import com.theravens.theravensback.model.Produit;
import com.theravens.theravensback.service.CommandeService;
import com.theravens.theravensback.service.LignesCommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CommandeController {

    @Autowired
    private CommandeService commandeService;

    @Autowired
    private LignesCommandeService lignesCommandeService;


    @GetMapping("ws/commandes/all")
    public List<Commande> getAllCommande() { return this.commandeService.getAll(); }

    @PostMapping("/ws/enregistrer-commande")
    public Commande addCommande(@RequestBody Commande commande) { return this.commandeService.add(commande); }

}
