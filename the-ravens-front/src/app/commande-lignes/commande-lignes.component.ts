import { Component } from '@angular/core';
import {PanierService} from "../service/panier.service";
import {Router} from "@angular/router";
import {CommandeService} from "../service/commande.service";
import * as jsPDF from "jspdf";

@Component({
  selector: 'app-commande-lignes',
  templateUrl: './commande-lignes.component.html',
  styleUrls: ['./commande-lignes.component.css']
})
export class CommandeLignesComponent {

  panierProduits: any[] = [];

  constructor(private panierService: PanierService, private router: Router, private commandeService: CommandeService) {

    this.panierProduits = this.panierService.getCartItems();
    console.log(this.panierProduits)
  }

  calculerPrixTotal() {
    let total = 0;
    for (const produit of this.panierProduits) {
      total += produit.prix * produit.quantite;
    }
    return total;
  }

  validerPaiement() {
    const totalPanier = this.calculerPrixTotal();

    const commande = {
      dateCommande: new Date().toISOString(),
      total: totalPanier,// Le total calculé du panier,
      lignesCommande: this.panierProduits.map(produit => {
      return {
        nomProduit: produit.nom,
        quantite: produit.quantite,
        taille: produit.taille,
        prix: produit.prix,
        idProduits: produit.id,
        idCommandes: 0 // L'ID de la commande sera généré lors de l'insertion
      };
    })
  };

    this.commandeService.enregistrerCommande(commande).subscribe(
      response => {
        // Gérer la réponse en cas de succès, par exemple :
        console.log("Commande enregistrée avec succès", response);
        // Rediriger l'utilisateur vers la page de confirmation
        this.router.navigate(['/commande']);
      },
      error => {
        // Gérer les erreurs en cas d'échec de l'enregistrement de la commande, par exemple :
        console.error("Erreur lors de l'enregistrement de la commande", error);
      }
    );

    this.router.navigate(['/commande']);
  }
}
