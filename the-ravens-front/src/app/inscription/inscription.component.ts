import { Component } from '@angular/core';
import {UtilisateurService} from "../service/utilisateur.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {

  nouvelUtilisateur: any = {
    prenom: '',
    nom: '',
    email: '',
    mdp: '',
    num_rue: '',
    rue: '',
    ville: '',
    code_postal: '',
    pays: '',
    role: 'Client' // Par défaut, vous pouvez ajuster si nécessaire
  };

  errorMessage: string = ''; // Déclaration de la propriété errorMessage

  constructor(private utilisateurService: UtilisateurService, private router: Router) {}

  inscriptionUtilisateur() {
    this.utilisateurService.addUtilisateur(this.nouvelUtilisateur).subscribe(
      (response: any) => {
        this.router.navigate(['./connexion']); // Traitez la réponse du serveur, redirigez ou affichez un message de réussite
      },
      (error: any) => {
        console.error(error);
        this.errorMessage = "Une erreur s'est produite lors de l'inscription. Veuillez réessayer.";// Traitez les erreurs, affichez un message d'erreur, etc.
      }
    );
  }
}
