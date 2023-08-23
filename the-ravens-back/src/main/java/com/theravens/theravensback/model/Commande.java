package com.theravens.theravensback.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "commandes")
public class Commande {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "date_commande")
    private Instant dateCommande;

    @Column(name = "total")
    private Float total;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_utilisateurs")
    private Utilisateur idUtilisateurs;

}