import { Component, OnInit } from '@angular/core';
import { CarrelloService } from '../carrello.service';
import { Prodotti } from '../models/prodotti';


@Component({
  selector: 'app-carrello',
  template: `
    <ng-container *ngIf="carrello.length > 0; else templateVuoto">
   <div class="container d-flex flex-column justify-content-center">
    <h1 class="text-center">Articoli</h1>
    <ul class="list-group" *ngFor="let item of carrello">
      <li class="list-group-item d-flex justify-content-between"><span>{{item.name}} </span><span>{{item.price}}</span></li>
    </ul>
   </div>
</ng-container>
<ng-template #templateVuoto>
  <h2 class="text-center">Non ci sono prodotti</h2>
</ng-template>
<div class="container">
  <form (ngSubmit)="submit(f)" #f="ngForm">
    <div class="form-group">
      <label for="nome">Nome</label>
      <input
        type="text"
        ngModel
        name="nome"
        class="form-control m-1"
        id="nome"
      />
    </div>
    <div class="form-group">
      <label for="indirizzo">Indirizzo</label>
      <input
        type="text"
        ngModel
        name="indirizzo"
        class="form-control m-1"
        id="indirizzo"
      />
    </div>
    <button type="submit" class="btn btn-primary m-1">Submit</button>
  </form>

</div>
  `,
  styles: [
  ]
})
export class CarrelloComponent implements OnInit {

  carrello!: Prodotti[]
  constructor(private carrelloSrv: CarrelloService) { }

  ngOnInit(): void {
    this.carrello = this.carrelloSrv.getCarrello()
    console.log(this.carrello)
  }

  submit(form:any){
    console.log(`Tutto apposto, il tuo ordine è stato inviato,`, form.value)
    form.reset();
    this.carrelloSrv.svuotaCarrello();
    this.carrello = this.carrelloSrv.getCarrello();
  }

}
