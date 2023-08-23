package com.theravens.theravensback.controller;

import com.theravens.theravensback.model.Category;
import com.theravens.theravensback.model.Produit;
import com.theravens.theravensback.service.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProduitController {

    @Autowired
    private ProduitService produitService;

    @GetMapping("/ws/produits/all")
    public List<Produit> getProduits() { return this.produitService.getAll(); }


    @PostMapping("/ws/produits/add")
    public Produit addProduit(@RequestBody Produit produit) { return this.produitService.add(produit); }


    @PutMapping("/ws/editer-produit/{id}")
    public ResponseEntity<String> editerProduit(@PathVariable Integer id, @RequestBody Produit produit) {
        produitService.editerProduit(id, produit);
        return ResponseEntity.ok("Produit édité avec succès");
    }

    @DeleteMapping("/ws/supprimer-produit/{id}")
    public ResponseEntity<String> supprimerProduit(@PathVariable Integer id) {
        produitService.supprimerProduit(id);
        return ResponseEntity.ok("Produit supprimé avec succès");
    }


    @GetMapping("/ws/produit/{id}")
    public Produit getProduitById(@PathVariable int id) {
        Produit produit = produitService.getProduitById(id);
        if (produit != null) {
            return produit;
        } else {
            // Vous pouvez lever une exception, retourner null ou retourner un Produit vide selon vos besoins
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Produit non trouvé");
        }
    }
}
