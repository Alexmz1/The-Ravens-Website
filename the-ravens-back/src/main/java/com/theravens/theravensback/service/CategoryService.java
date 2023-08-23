package com.theravens.theravensback.service;

import com.theravens.theravensback.model.Category;
import com.theravens.theravensback.repository.CategoryRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    /**
     * cette méthode elle permet de récupérer l'ensemble des données qui ce trouve dans la base de donnée
     * @return
     */
    public List<Category> getAll(){
        return this.categoryRepository.findAll();
    }

    public Category add(Category category) {return categoryRepository.save(category);}


    public void editerCategorie(Integer id, Category nouvelleCategorie) {
        // Vérifier si la catégorie existe
        Category categorieExistante = categoryRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Catégorie non trouvée"));

        categorieExistante.setNom(nouvelleCategorie.getNom());
        categoryRepository.save(categorieExistante);
    }

    public void supprimerCategorie(Integer id) {
        // Vérifier si la catégorie existe
        Category categorie = categoryRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Catégorie non trouvée"));

        categoryRepository.delete(categorie);
    }
}
