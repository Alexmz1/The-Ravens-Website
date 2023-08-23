package com.theravens.theravensback.controller;

import com.theravens.theravensback.model.Commande;
import com.theravens.theravensback.service.CommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CommandeController {

    @Autowired
    private CommandeService commandeService;

    @GetMapping("ws/commandes/all")
    public List<Commande> getAllCommande() { return this.commandeService.getAll(); }
}
