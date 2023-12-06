import {Categorie} from "./categorie";

export interface Produit {
  id : number | undefined;
  nom : string;
  prix : number;
  description : string;
  photoProduit : string;
  idCategories : Categorie | undefined;
}
