package com.theravens.theravensback.service;

import com.theravens.theravensback.model.Category;
import com.theravens.theravensback.model.Produit;
import com.theravens.theravensback.model.Utilisateur;
import com.theravens.theravensback.repository.ProduitRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProduitService {

    @Autowired
    private ProduitRepository produitRepository;

    public List<Produit> getAll(){
        return this.produitRepository.findAll();
    }

    public Produit add(Produit produit) {return produitRepository.save(produit);}

    public void editerProduit(Integer id, Produit nouveauProduit) {
        // Vérifier si la catégorie existe
        Produit produitExistant = produitRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Produit non trouvée"));

        produitExistant.setNom(nouveauProduit.getNom());
        produitExistant.setPrix(nouveauProduit.getPrix());
        produitExistant.setDescription(nouveauProduit.getDescription());
        produitExistant.setPhotoProduit(nouveauProduit.getPhotoProduit());
        produitRepository.save(produitExistant);
    }

    public void supprimerProduit(Integer id) {
        // Vérifier si la catégorie existe
        Produit produit = produitRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Produit non trouvée"));

        produitRepository.delete(produit);
    }


    public Produit getProduitById(Integer id){
        return produitRepository.findById(id).orElse(null);
    }
}
