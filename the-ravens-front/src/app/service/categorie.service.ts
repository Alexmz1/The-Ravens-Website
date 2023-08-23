import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categorie} from "../../model/categorie";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  baseURL : string = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  addCategorie(newCategorie: any) {
    return this.http.post(this.baseURL + "/ws/categories/add", newCategorie);
  }

  getCategorie():Observable<Array<Categorie>>{
    return this.http.get<Array<Categorie>>(this.baseURL + "/ws/categories/all")
  }


  editerCategorie(id: number, categorie: any): Observable<any> {
    return this.http.put(this.baseURL + `/ws/editer-categorie/${id}`, categorie);
  }

  supprimerCategorie(id: number): Observable<any> {
    return this.http.delete(this.baseURL + `/ws/supprimer-categorie/${id}`);
  }

}
