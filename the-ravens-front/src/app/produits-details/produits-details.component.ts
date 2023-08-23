import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProduitService} from "../service/produit.service";

@Component({
  selector: 'app-produits-details',
  templateUrl: './produits-details.component.html',
  styleUrls: ['./produits-details.component.css']
})
export class ProduitsDetailsComponent {

  produit: any;

  constructor(private route: ActivatedRoute, private produitService: ProduitService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      // Utilisez le service pour récupérer le produit par son ID
      this.produitService.getProduitById(id).subscribe(
        (produit: any) => {
          this.produit = produit;
        },
        (error) => {
          console.error('Erreur lors de la récupération du produit : ', error);
        }
      );
    });
  }
}
