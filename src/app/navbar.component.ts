import { Component, OnInit } from '@angular/core';
import { CarrelloService } from './carrello.service';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Progetto_Carello</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" [routerLink]="['/']" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['/carrello']" routerLinkActive="active">Carrello({{this.carrelloSrv.getNumProd()}})</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(public carrelloSrv: CarrelloService) { }

  ngOnInit(): void {
  }

}
