import {Component, Input, OnInit} from '@angular/core';
import {PanierService} from "../service/panier.service";
import {Router} from "@angular/router";
import {CommandeService} from "../service/commande.service";
import {preserveWhitespacesDefault} from "@angular/compiler";
import {Commande} from "../../model/commande";

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent{

  lignesCommandesProduits: any[] = [];
  constructor(private panierService: PanierService, private router: Router, private commandeService: CommandeService) {
    this.lignesCommandesProduits = this.panierService.getCartItems();
  }


  calculerPrixTotalLigne(produit: any): number {
    const prixUnitaireHT = produit.prix;
    const quantite = produit.quantite;

    // Calcul du prix total TTC pour la ligne (sans TVA)
    const prixTotalTTC = prixUnitaireHT * quantite;

    return prixTotalTTC;
  }

  calculerPrixTotal() {
    let total = 0;
    for (const produit of this.lignesCommandesProduits) {
      total += produit.prix * produit.quantite;
    }
    return total;
  }
}
