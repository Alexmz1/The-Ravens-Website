import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MessageClientService} from "../service/message-client.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  messageEnvoye: boolean = false;

  messageData = {
    nom: '',
    prenom: '',
    email: '',
    message: '',
  };

  constructor(private messageClientService: MessageClientService) {}

  envoyerMessage() {
    // Récupérez l'ID utilisateur de l'endroit approprié (session, token, etc.)
    // Exemple: const userId = 'votre_id_utilisateur';

    // Associez l'ID utilisateur aux données du formulaire
    //this.messageData.id_utilisateurs = utilisateurId;

    this.messageClientService.envoieMessageClient(this.messageData).subscribe(
      response => {
        console.log('Données envoyées à la BDD avec succès', response);

        // Réinitialisez les champs du formulaire une fois le message envoyé
        this.messageData.nom = '';
        this.messageData.email = '';
      },
      error => {
        console.error('Erreur lors de l\'envoi des données à la BDD', error);
      }
    );

    // Envoie du message réalisé
    this.messageEnvoye = true;
  }
}
