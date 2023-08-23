import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  utilisateur = {
    email: '',
    password: ''
  };

  baseURL : string = "http://localhost:8080";
  constructor(private http:HttpClient, private router: Router) { }

  connexion(email: string, mdp: string): Observable<any>{
    const connexion = { email, mdp };
    return this.http.post(this.baseURL + "/ws/utilisateur/login", connexion);
  }
}
