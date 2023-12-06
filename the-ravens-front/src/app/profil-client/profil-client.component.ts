import {Component, OnInit} from '@angular/core';
import {ConnexionService} from "../service/connexion.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UtilisateurService} from "../service/utilisateur.service";

@Component({
  selector: 'app-profil-client',
  templateUrl: './profil-client.component.html',
  styleUrls: ['./profil-client.component.css']
})
export class ProfilClientComponent implements OnInit{

  utilisateur: any; // Déclarer la variable utilisateur pour contenir les données

  constructor(private route: ActivatedRoute,
              private connexionService: ConnexionService,
              private router: Router,
              private utilisateurService: UtilisateurService) {}

  getUtilisateursById(): void {
    this.utilisateurService.getUtilisateurs().subscribe(
      (utilisateurs: any[]) => {
        this.utilisateur = utilisateurs;// Mettez à jour le tableau avec les utilisateurs récupérés
      },
      error => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    );
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = params['id']; // Récupérer l'identifiant depuis l'URL
      this.utilisateurService.getUtilisateursById(userId).subscribe(
        (utilisateur: any) => {
          this.utilisateur = utilisateur;
        },
        (error: any) => {
          console.error('Erreur lors de la récupération de l\'utilisateur', error);
        }
      );
    });
  }



  // PARTIE EDITION ADRESSE
  adresseLivraisonEnCoursEdition = false;
  adresseLivraisonEdite: any = {}; // Utilisateur en cours d'édition

  openEditForm(utilisateur: any) {
    this.adresseLivraisonEnCoursEdition = true;
    this.adresseLivraisonEdite = { ...utilisateur };
  }

  closeEditForm() {
    this.adresseLivraisonEnCoursEdition = false;
    this.adresseLivraisonEdite = {};
  }

  saveEditedAdresseLivraison() {
    // Logique pour sauvegarder les modifications
    // Vous pouvez envoyer une requête HTTP pour mettre à jour le rôle de l'utilisateur côté serveur
    // Une fois les modifications sauvegardées, appelez closeEditForm() pour fermer le formulaire d'édition

    this.utilisateurService.updateUtilisateur(this.adresseLivraisonEdite).subscribe(
      response => {
        // La requête a réussi, vous pouvez maintenant fermer le formulaire d'édition
        this.closeEditForm();
      },
      error => {
        console.error('Une erreur est survenue lors de la mise à jour de l\'adresse de livraison', error);
      }
    );
  }

  /*deconnexion() {
    this.connexionService.deconnecter(); // Appelle la méthode de déconnexion
    this.router.navigate(['']);
  }*/
}
