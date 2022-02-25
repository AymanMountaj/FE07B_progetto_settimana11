import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home.component';
import { ProdottoComponent } from './pages/prodotto.component';
import { CarrelloComponent } from './pages/carrello.component';
import { FormsModule } from '@angular/forms';

const routes:Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dettagli-prodotto/:id',
    component: ProdottoComponent
  },
  {
    path:'carrello',
    component: CarrelloComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProdottoComponent,
    CarrelloComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
