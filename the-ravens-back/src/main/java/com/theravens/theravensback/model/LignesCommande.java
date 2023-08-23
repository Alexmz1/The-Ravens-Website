package com.theravens.theravensback.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "lignes_commandes")
public class LignesCommande {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "quantite")
    private Integer quantite;

    @Column(name = "prix")
    private Float prix;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_produits")
    private Produit idProduits;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_commandes")
    private Commande idCommandes;

}