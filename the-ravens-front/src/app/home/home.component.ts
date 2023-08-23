import { Component } from '@angular/core';
import {ProduitService} from "../service/produit.service";
import {ActivatedRoute} from "@angular/router";
import {Produit} from "../../model/produit";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  derniersProduits: any[] = [];

  constructor(private route: ActivatedRoute, private produitService: ProduitService) {}

  ngOnInit(): void {
    // Appelez le service pour récupérer les trois derniers produits
    this.produitService.getProduit().subscribe((products: any[]) => {
      this.derniersProduits = products;
    });
  }
}
