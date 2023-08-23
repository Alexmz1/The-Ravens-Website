package com.theravens.theravensback.controller;

import com.theravens.theravensback.model.Category;
import com.theravens.theravensback.model.Utilisateur;
import com.theravens.theravensback.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/ws/categories/all")
    public List<Category> getCategory() {return this.categoryService.getAll();}


    @PostMapping("/ws/categories/add")
    public Category addCategorie(@RequestBody Category category) { return this.categoryService.add(category); }


    @PutMapping("/ws/editer-categorie/{id}")
    public ResponseEntity<String> editerCategorie(@PathVariable Integer id, @RequestBody Category category) {
        categoryService.editerCategorie(id, category);
        return ResponseEntity.ok("Catégorie éditée avec succès");
    }

    @DeleteMapping("/ws/supprimer-categorie/{id}")
    public ResponseEntity<String> supprimerCategorie(@PathVariable Integer id) {
        categoryService.supprimerCategorie(id);
        return ResponseEntity.ok("Catégorie supprimée avec succès");
    }
}
