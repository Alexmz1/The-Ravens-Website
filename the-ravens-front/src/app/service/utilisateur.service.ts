import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  baseURL : string = "http://localhost:8080";
  constructor(private http:HttpClient) { }

  addUtilisateur(newUtilisateur: any) {
    return this.http.post(this.baseURL + "/ws/utilisateur/add", newUtilisateur);
  }

  getUtilisateurs(): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL + "/ws/utilisateur/all");
  }


  // Modifier le role utilisateur
  updateUtilisateur(utilisateur: any): Observable<any> {
    const url = `${this.baseURL}/${utilisateur.id}`;
    // Ici, vous pouvez ajuster la structure de la requête en fonction de votre API
    // Vous pouvez utiliser HTTP PUT ou PATCH en fonction de vos besoins
    return this.http.put(url, utilisateur);
  }
}
