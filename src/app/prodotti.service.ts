import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Prodotti } from './models/prodotti';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  url = 'http://localhost:4201';

  constructor(private http: HttpClient) { }

 get(){
    return this.http.get<Prodotti[]>(`${this.url}/products`)
  }

  getProdotto(id:number){
    return this.http.get<Prodotti>(`${this.url}/products/${id}`)
  }
}
