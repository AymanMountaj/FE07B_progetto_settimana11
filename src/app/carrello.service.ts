import { Injectable } from '@angular/core';
import { Prodotti } from './models/prodotti';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  i: number = 0;
  carrello:Prodotti[] =[]
  constructor() { }

  aggiungiCarrello(prod:Prodotti){
    this.carrello.push(prod)
    this.i++;
  }
  getCarrello() {
    return this.carrello
  }
  getNumProd() {
    return this.i
  }
  svuotaCarrello() {
    this.carrello = [];
    this.i = 0
  }
}
