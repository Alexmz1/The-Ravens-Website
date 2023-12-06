import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../../model/produit";
import {Commande} from "../../model/commande";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  baseURL : string = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  // ENREGISTRER LA COMMANDE EN BDD
  enregistrerCommande(commande: any) {
    return this.http.post(this.baseURL + '/ws/enregistrer-commande', commande);
  }

}
