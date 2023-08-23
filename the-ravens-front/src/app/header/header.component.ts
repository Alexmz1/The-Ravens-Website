import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UtilisateurService} from "../service/utilisateur.service";
import {ConnexionService} from "../service/connexion.service";
import {AuthentificationService} from "../service/authentification.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor() {}

  menuBurgerOuvert = false;

  toggleBurgerMenu() {
    this.menuBurgerOuvert = !this.menuBurgerOuvert;
  }
}
