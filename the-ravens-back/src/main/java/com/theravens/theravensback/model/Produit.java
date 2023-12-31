package com.theravens.theravensback.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "produits")
public class Produit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Utilisation de l'auto-incrémentation pour générer l'ID
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "prix")
    private Float prix;

    @Column(name = "description", length = 1024)
    private String description;

    @Column(name = "photo_produit")
    private String photoProduit;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_categories")
    private Category idCategories;

}