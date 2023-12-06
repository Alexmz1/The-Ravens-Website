import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UtilisateurService} from "../service/utilisateur.service";
import {ConnexionService} from "../service/connexion.service";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private connexionService: ConnexionService) {}

  utilisateurAuthentifie(): boolean {
    return this.connexionService.id !== null;
  }

  utilisateurClient(): boolean {
    return this.connexionService.role === 'Client';
  }

  utilisateurAdmin(): boolean {
    return this.connexionService.role === 'Admin';
  }


  menuBurgerOuvert = false;

  toggleBurgerMenu() {
    this.menuBurgerOuvert = !this.menuBurgerOuvert;
  }
}
