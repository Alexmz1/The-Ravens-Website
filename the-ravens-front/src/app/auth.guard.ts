// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ConnexionService } from './service/connexion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private connexionService: ConnexionService, private router: Router) {}

  canActivate(): boolean {
    if (this.connexionService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['connexion']); // Redirigez vers la page de connexion si l'utilisateur n'est pas connecté
      return false;
    }
  }
}
