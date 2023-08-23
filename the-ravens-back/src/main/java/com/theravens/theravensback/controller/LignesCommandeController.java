package com.theravens.theravensback.controller;

import com.theravens.theravensback.model.LignesCommande;
import com.theravens.theravensback.service.LignesCommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class LignesCommandeController {

    @Autowired
    private LignesCommandeService lignesCommandeService;

    @GetMapping("/ws/lignes-commande/all")
    public List<LignesCommande> getAllLignesCommande() { return this.lignesCommandeService.getAll(); }
}
