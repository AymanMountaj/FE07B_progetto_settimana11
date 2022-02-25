import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProdottiService } from '../prodotti.service';
import { Prodotti } from 'src/app/models/prodotti';

@Component({
  selector: 'app-home',
  template: `
      <div class="container mt-4 d-flex justify-content-center" *ngFor="let item of prodotti">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title fw-bold">{{item.name}}</h5>
        <p class="card-text">{{item.description}}</p>
        <a class="card-link" [routerLink]="['/dettagli-prodotto', item.id]">Dettagli</a>
      </div>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  prodotti: Prodotti[] = [];
  sub!: Subscription
  constructor(private prodottiSrv: ProdottiService) { }

  ngOnInit(): void {
    const prodotti = this.prodottiSrv.get().subscribe((risProdotti) => {
      this.prodotti = risProdotti;
      console.log(this.prodotti)
    })
  }

}
