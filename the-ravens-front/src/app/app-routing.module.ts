import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduitsComponent} from "./produits/produits.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {ProduitsDetailsComponent} from "./produits-details/produits-details.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {ProfilClientComponent} from "./profil-client/profil-client.component";
import {ProfilAdminComponent} from "./profil-admin/profil-admin.component";
import {PanierComponent} from "./panier/panier.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nos-produits', component: ProduitsComponent },
  { path: 'produits/:id', component: ProduitsDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'profil-client', component: ProfilClientComponent },
  { path: 'profil-admin', component: ProfilAdminComponent },
  { path: 'panier', component: PanierComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
