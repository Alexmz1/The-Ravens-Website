package com.theravens.theravensback.model;

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

    @Lob
    @Column(name = "description")
    private String description;

    @Column(name = "photo_produit")
    private byte[] photoProduit;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_categories")
    private Category idCategories;

}