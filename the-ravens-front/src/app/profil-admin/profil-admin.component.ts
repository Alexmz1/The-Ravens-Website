import {Component, OnInit} from '@angular/core';
import {UtilisateurService} from "../service/utilisateur.service";
import {Utilisateur} from "../../model/utilisateur";
import {Observable} from "rxjs";
import {CategorieService} from "../service/categorie.service";
import {ProduitService} from "../service/produit.service";

@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.css']
})
export class ProfilAdminComponent implements OnInit{


  utilisateurs: any[] = [];
  categories: any[] = [];
  produits: any[] = [];

  nbProduitsAffiches: number = 3; // Nombre de ligne affichées par le tableau de base
  barreRechercheProduits: string = '';
  produitsFiltres: any[] = [];

  nbUtilisateursAffiches: number = 3;
  barreRechercheUtilisateurs: string = '';
  utilisateursFiltres: any[] = [];

  constructor(private utilisateurService: UtilisateurService, private categorieService: CategorieService, private produitService: ProduitService) { }

  ngOnInit(): void {
    this.getUtilisateurs();
    this.getCategories();
    this.getProduits()
  }


  // FORMULAIRE CATEGORIE
  nouvelleCategorie: any = {
    nom: ''
  };

  errorMessage: string = ''; // On déclare un champs vide pour la propriété erreur

  // AJOUTER UNE CATEGORIE
  ajoutCategorie() {
    this.categorieService.addCategorie(this.nouvelleCategorie).subscribe(
      (response: any) => {
        console.log('Catégorie ajoutée avec succès:', response);
        this.nouvelleCategorie = {}; // Réinitialiser les champs du formulaire après l'ajout
      },
      error => {
        console.error(error);
        this.errorMessage = "Une erreur s'est produite lors de l'ajout de la catégorie. Veuillez réessayer.";
      }
    );
  }

  // AFICHAGE CATEGORIES
  getCategories(): void {
    this.categorieService.getCategorie().subscribe(
      (categories: any[]) => {
        this.categories = categories;
      },
      error => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    );
  }


  categorieEnCoursEdition = false;
  categorieEditee: any = {}; // Catégorie en cours d'édition
  openEditFormCategorie(categorie: any) {
    this.categorieEnCoursEdition = true;
    this.categorieEditee = { ...categorie };
  }

  closeEditFormCategorie() {
    this.categorieEnCoursEdition = false;
    this.categorieEditee = {};
  }


  saveEditedCategorie() {
    this.categorieService
      .editerCategorie(this.categorieEditee.id, this.categorieEditee)
      .subscribe(
        (response: any) => {
          console.log('Catégorie éditée avec succès', response);
          this.getCategories(); // Mettre à jour la liste des catégories
          this.closeEditFormCategorie();
        },
        (error: any) => {
          console.error(
            'Une erreur est survenue lors de l\'édition de la catégorie',
            error
          );
        }
      );
  }

  deleteCategorie(categorie: any) {
    const confirmDelete = confirm(
      'Êtes-vous sûr de vouloir supprimer la catégorie "${categorie.nom}" ?'
    );
    if (confirmDelete) {
      this.categorieService.supprimerCategorie(categorie.id).subscribe(
        (response: any) => {
          console.log('Catégorie supprimée avec succès', response);
          this.getCategories(); // Mettre à jour la liste des catégories
        },
        (error: any) => {
          console.error(
            'Une erreur est survenue lors de la suppression de la catégorie',
            error
          );
        }
      );
    }
  }



  // FORMULAIRE AJOUT PRODUIT
  nouveauProduit: any = {
    nom: '',
    prix: '',
    description: '',
    photo_produit: '',
    id_categories: '' // Champ pour l'id de la catégorie sélectionnée
  };

  onFileChange(event: any) {
    const selectedFile = event.target.files[0];
    this.nouveauProduit.photo_produit = selectedFile;
  }

  ajoutProduit() {
    console.log('Données à envoyer au service:', this.nouveauProduit);
    const formData = new FormData();
    formData.append('nom', this.nouveauProduit.nom);
    formData.append('prix', this.nouveauProduit.prix);
    formData.append('description', this.nouveauProduit.description);
    formData.append('photo_produit', this.nouveauProduit.photo_produit);
    formData.append('id_categories', this.nouveauProduit.id_categories);

    this.produitService.addProduit(this.nouveauProduit).subscribe(
      (response: any) => {
        console.log('Produit ajouté avec succès:', response);
        this.nouveauProduit = {};// Réinitialiser les champs du formulaire après l'ajout
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  // Affichage produits
  getProduits(): void {
    this.produitService.getProduit().subscribe(
      (produits: any[]) => {
        this.produits = produits;// Mettez à jour le tableau avec les produits récupérés
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des produits', error);
      }
    );
  }
  showMoreRows() {
    this.nbProduitsAffiches += 5;
  }

  searchProducts() {
    this.produitsFiltres = this.produits.filter(product =>
      product.nom.toLowerCase().includes(this.barreRechercheProduits.toLowerCase())
    );
  }



  // MODIFICATION PRODUITS
  produitEnCoursEdition = false;
  produitEdite: any = {}; // produits en cours d'édition
  selectedProduitId: number | null = null;
  openEditFormProduit(produit: any) {
    this.produitEnCoursEdition = true;
    this.selectedProduitId = produit.id;
    this.produitEdite = { ...produit };
  }

  closeEditFormProduit() {
    this.produitEnCoursEdition = false;
    this.produitEdite = {};
  }


  saveEditedProduit() {
    this.produitService
      .editerProduit(this.produitEdite.id, this.produitEdite)
      .subscribe(
        (response: any) => {
          console.log('Produit éditée avec succès', response);
          this.getProduits(); // Mettre à jour la liste des produits
          this.closeEditFormProduit();
        },
        (error: any) => {
          console.error(
            'Une erreur est survenue lors de l\'édition du produit',
            error
          );
        }
      );
  }

  deleteProduit(produit: any) {
    const confirmDelete = confirm(
      'Êtes-vous sûr de vouloir supprimer le produit "${produit.nom}" ?'
    );
    if (confirmDelete) {
      this.produitService.supprimerProduit(produit.id).subscribe(
        (response: any) => {
          console.log('Catégorie supprimée avec succès', response);
          this.getProduits(); // Mettre à jour la liste des produits
        },
        (error: any) => {
          console.error(
            'Une erreur est survenue lors de la suppression de la catégorie',
            error
          );
        }
      );
    }
  }




  // AFFICHAGE UTILISATEURS
  getUtilisateurs(): void {
    this.utilisateurService.getUtilisateurs().subscribe(
      (utilisateurs: any[]) => {
      this.utilisateurs = utilisateurs;// Mettez à jour le tableau avec les utilisateurs récupérés
      },
      error => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    );
  }

  showMoreUsers() {
    this.nbUtilisateursAffiches += 5;
  }

  searchUsers() {
    this.utilisateursFiltres = this.utilisateurs.filter(user =>
      (user.nom + ' ' + user.prenom).toLowerCase().includes(this.barreRechercheUtilisateurs.toLowerCase())
    );
  }


  // PARTIE EDITION UTILISATEUR
  utilisateurEnCoursEdition = false;
  utilisateurEdite: any = {}; // Utilisateur en cours d'édition

  openEditForm(utilisateur: any) {
    this.utilisateurEnCoursEdition = true;
    this.utilisateurEdite = { ...utilisateur };
  }

  closeEditForm() {
    this.utilisateurEnCoursEdition = false;
    this.utilisateurEdite = {};
  }

  saveEditedUtilisateur() {
    // Logique pour sauvegarder les modifications
    // Vous pouvez envoyer une requête HTTP pour mettre à jour le rôle de l'utilisateur côté serveur
    // Une fois les modifications sauvegardées, appelez closeEditForm() pour fermer le formulaire d'édition

    this.utilisateurService.updateUtilisateur(this.utilisateurEdite).subscribe(
      response => {
        // La requête a réussi, vous pouvez maintenant fermer le formulaire d'édition
        this.closeEditForm();
      },
      error => {
        console.error('Une erreur est survenue lors de la mise à jour de l\'utilisateur', error);
      }
    );
  }
}
