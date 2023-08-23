import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categorie} from "../../model/categorie";
import {Produit} from "../../model/produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  baseURL : string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  addProduit(newProduit: any) {
    console.log('Données à envoyer:', newProduit);
    return this.http.post(this.baseURL + "/ws/produits/add", newProduit);
  }

  getProduit(): Observable<Array<Produit>> {
    return this.http.get<Array<Produit>>(this.baseURL + "/ws/produits/all")
  }


  editerProduit(id: number, produit: any): Observable<any> {
    return this.http.put(this.baseURL + `/ws/editer-produit/${id}`, produit);
  }

  supprimerProduit(id: number): Observable<any> {
    return this.http.delete(this.baseURL + `/ws/supprimer-produit/${id}`);
  }

  getProduitById(id : number): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.baseURL + `/ws/produit/${id}`);
  }
}
