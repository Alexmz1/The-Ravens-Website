import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private panierProduits: any[] = [];

  ajoutAuPanier(produit: any, quantite: number, taille: string) {
    const item = {
      id: produit.id,
      nom: produit.nom,
      photoProduit: produit.photoProduit,
      prix: produit.prix,
      quantite: quantite,
      taille: taille
    };
    this.panierProduits.push(item);
  }

  getCartItems() {
    return this.panierProduits;
  }

  removeItem(index: number) {
    this.panierProduits.splice(index, 1);
  }
}
