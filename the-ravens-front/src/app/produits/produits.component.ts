import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitService} from "../service/produit.service";
import {CategorieService} from "../service/categorie.service";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {
  produits: any[] = [];
  barreRechercheProduit: string = '';

  selectedCategorie: string = '';
  categories: any[] = [];

  constructor(private route: ActivatedRoute, private produitService: ProduitService, private categorieService: CategorieService) {}

  ngOnInit(): void {
    this.produitService.getProduit().subscribe((products: any[]) => {
      this.produits = products;
    });

    this.produitService.getProduit().subscribe((products: any[]) => {
      this.produits = products;
    });

    this.categorieService.getCategorie().subscribe((categories: any[]) => {
      this.categories = categories;
    });
  }

  filtrerProduitsParCategorie() {
    if (this.selectedCategorie === '') {
      // Si "Toutes les catégories" sont sélectionnées, réinitialisez la liste des produits
      this.produits = this.produits; // Vous pouvez ajuster cela en fonction de votre logique
    } else {
      // Filtrer les produits par catégorie
      this.produits = this.produits.filter(produit => produit.categorieId === this.selectedCategorie);
    }
  }



  produitsFiltres = this.produits; // Initialisez avec tous les produits au début

  rechercheProduit() {
    this.produitsFiltres = this.produits.filter(produit =>
      produit.nom.toLowerCase().includes(this.barreRechercheProduit.toLowerCase())
    );
  }
}
