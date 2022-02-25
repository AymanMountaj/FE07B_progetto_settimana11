import { Component, OnInit, OnDestroy} from '@angular/core';
import { Prodotti } from 'src/app/models/prodotti';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProdottiService } from '../prodotti.service';
import { CarrelloService } from '../carrello.service';

@Component({
  selector: 'app-prodotto',
  template: `
      <div class="container d-flex flex-column justify-content-center" *ngIf="prodotto">
        <h1 class="text-center">Dettagli prodotto</h1>
        <p class="fw-bold display-6">{{prodotto.name}}</p>
        <p class="fw-bold display-6">{{prodotto.price}}</p>
        <p>{{prodotto.description}}</p>
        <div>
          <button class="btn btn-primary" (click)="aggiungi()">Aggiungi al carrello</button>
        </div>
     </div>
  `,
  styles: [
  ]
})
export class ProdottoComponent implements OnInit, OnDestroy {

  prodotto!: Prodotti
  sub!:Subscription
  carello: Prodotti[] = []

  constructor(private prodottiSrv: ProdottiService, private carrelloSrv: CarrelloService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params:Params) => {
      const id = params['id'];
      this.prodottiSrv.getProdotto(id).subscribe((response:Prodotti) => {
        this.prodotto = response;
      });
    })
  }

  aggiungi(){
    this.carrelloSrv.aggiungiCarrello(this.prodotto)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
}

}
