import { Component } from '@angular/core';
import {ConnexionService} from "../service/connexion.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

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

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {}

  connexion() {
    const url = 'http://localhost:8080/ws/utilisateur/login';

    const credentials = {
      email: this.utilisateur.email,
      mdp: this.utilisateur.mdp
    };

    this.http.post(url, credentials).subscribe(
      (response: any) => {
        console.log('Réponse du serveur:', response);

        // Sauvegarder le token dans les cookies
        this.cookieService.set('token', response.token);


        if (response.role === 'Client') {
          this.router.navigate(['/profil-client']); // Rediriger vers le profil du client
        } else if (response.role === 'Admin') {
          this.router.navigate(['/profil-admin']); // Rediriger vers le profil de l'admin
        } else {
          alert('Identifiants incorrects');
        }
      },
      (error) => {
        console.error('Erreur lors de la connexion : ', error);
        alert('Erreur lors de la connexion');
      }
    );
  }


  /*connexion() {
    const url = 'http://localhost:8080/ws/utilisateur/login'; // Remplacez par l'URL de votre API backend

    const credentials = {
      email: this.utilisateur.email,
      password: this.utilisateur.mdp
    };

    this.http.post(url, credentials).subscribe(
      (response: any) => {
        if (response.role === 'Client') {
          this.router.navigate(['/profil-client']); // Rediriger vers le profil du client
        } else if (response.role === 'Admin') {
          this.router.navigate(['/profil-admin']); // Rediriger vers le profil de l'admin
        } else {
          alert('Identifiants incorrects');
        }
      },
      (error) => {
        console.error('Erreur lors de la connexion : ', error);
        alert('Une erreur est survenue lors de la connexion');
      }
    );
  }*/
}
