import { Component } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {ConnexionService} from "./service/connexion.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the-ravens-front';

  constructor(private connexionService: ConnexionService) {}

  /*ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.connexionService.validerSession(token).subscribe(
        (response: any) => {
          if (response.valid) {
            this.connexionService.isLoggedIn = true;
            this.connexionService.id = response.id;
            this.connexionService.role = response.role;
          } else {
            this.connexionService.deconnecter();
          }
        },
        (error: any) => {
          console.error('Erreur de validation de session :', error);
        }
      );
    }
  }*/
}
