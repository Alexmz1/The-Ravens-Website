import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProduitsComponent } from './produits/produits.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProduitsDetailsComponent } from './produits-details/produits-details.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {HttpClientModule} from "@angular/common/http";
import { ConnexionComponent } from './connexion/connexion.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProfilClientComponent } from './profil-client/profil-client.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { PanierComponent } from './panier/panier.component';
import { CommandeComponent } from './commande/commande.component';
import { CommandeLignesComponent } from './commande-lignes/commande-lignes.component';
import { NousDecouvrirComponent } from './nous-decouvrir/nous-decouvrir.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProduitsComponent,
    HomeComponent,
    ContactComponent,
    ProduitsDetailsComponent,
    InscriptionComponent,
    ConnexionComponent,
    ProfilClientComponent,
    ProfilAdminComponent,
    PanierComponent,
    CommandeComponent,
    CommandeLignesComponent,
    NousDecouvrirComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
