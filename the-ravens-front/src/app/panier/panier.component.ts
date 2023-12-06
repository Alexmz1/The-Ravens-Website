import { Component } from '@angular/core';
import {PanierService} from "../service/panier.service";
import {ProduitService} from "../service/produit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {

  panierProduits: any[] = [];

  constructor(private panierService: PanierService, private router: Router) {

    this.panierProduits = this.panierService.getCartItems();
    console.log(this.panierProduits)
  }

  supprimerProduit(index: number) {
    this.panierProduits.splice(index, 1);
    const confirmDelete = confirm(
      'Êtes-vous sûr de vouloir supprimer le produit du panier ?'
    );
  }

  calculerPrixTotal() {
    let total = 0;
    for (const produit of this.panierProduits) {
      total += produit.prix * produit.quantite;
    }
    return total;
  }

  paiement() {
    // Rediriger vers la page de confirmation
    this.router.navigate(['/confirmation-commande']);
  }

}
