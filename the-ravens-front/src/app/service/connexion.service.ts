import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  utilisateur = {
    email: '',
    password: ''
  };


  id: number | null = null;
  role: string | null = null;

  baseURL : string = "http://localhost:8080";
  constructor(private http:HttpClient, private router: Router,private cookieService: CookieService) { }

  /*connexion(email: string, mdp: string): Observable<any>{
    const connexion = { email, mdp };
    return this.http.post(this.baseURL + `/ws/utilisateur/login`, connexion);
  }*/


  // Ajoutez une propriété pour suivre l'état de connexion
  isLoggedIn: boolean = false;

  // Mettez à jour cette méthode pour gérer l'état de connexion
  connexion(email: string, mdp: string): Observable<any> {
    const connexion = { email, mdp };
    return this.http.post(this.baseURL + `/ws/utilisateur/login`, connexion)
      .pipe(
        tap((response: any) => {
          if (response.id && (response.role === 'Client' || response.role === 'Admin')) {
            // Connexion réussie
            this.isLoggedIn = true;
            this.id = response.id;
            this.role = response.role;
            // Stockez le token dans un cookie si nécessaire
            //this.cookieService.set('token', response.token);

            // Stockez le token dans le LocalStorage
            localStorage.setItem('token', response.token);
          }
        })
      );
  }

  // Cette méthode envoie le jeton au serveur pour valider la session
  /*validerSession(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get(this.baseURL + `/ws/utilisateur/validate-session`, { headers });
  }


  deconnecter() {
    this.isLoggedIn = false;
    this.id = null;
    this.role = null;
    // Supprimez le token du LocalStorage
    localStorage.removeItem('token');
  }*/


}
