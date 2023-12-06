import { Component } from '@angular/core';
import {ConnexionService} from "../service/connexion.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  utilisateur = {
    email: '',
    mdp: ''
  };

  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router,
              private cookieService: CookieService,
              private connexionService: ConnexionService,
              private authService: AuthService) {}

  connexion() {
    const url = 'http://localhost:8080/ws/utilisateur/login';

    const credentials = {
      email: this.utilisateur.email,
      mdp: this.utilisateur.mdp
    };


    this.connexionService.connexion(credentials.email, credentials.mdp).subscribe(
      (response: any) => {
        // ... (votre code de gestion de la réponse)
        if (this.connexionService.isLoggedIn) {
          if (response.role === 'Client') {
            this.router.navigate(['/profil-client', response.id]);
          } else if (response.role === 'Admin') {
            this.router.navigate(['/profil-admin', response.id]);
          }
          /*if (response.token) {
            localStorage.setItem('token', response.token); // Stockez le jeton dans le LocalStorage
            // ...
          }*/
        } else {
          alert('Identifiants incorrects');
        }
      },

    /*this.http.post(url, credentials).subscribe(
      (response: any) => {
        console.log('Réponse du serveur:', response);


        // Sauvegarder le token ou l'identifiant de session dans les cookies
        //this.cookieService.set('token', response.token);


        if (response.id && response.role === 'Client') {
          this.router.navigate(['/profil-client', response.id]); // Rediriger vers le profil du client
        } else if (response.id && response.role === 'Admin') {
          this.router.navigate(['/profil-admin', response.id]); // Rediriger vers le profil de l'admin
        } else {
          alert('Identifiants incorrects');
        }
      },
      (error) => {
        console.error('Erreur lors de la connexion : ', error);
        alert('Erreur lors de la connexion');
      }*/
    );
  }
}
