import { Component, OnInit } from '@angular/core';
import {
  RouterOutlet,
  RouterModule,
  Router,
  NavigationEnd,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavegacionComponent } from '../navegacion/navegacion.component';
import { HeaderComponent } from '../header/header.component';
import { MenusComponent } from '../menus/menus.component';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { MenuNavegacionComponent } from '../menu-navegacion/menu-navegacion.component';
import { NoticiasComponent } from '../noticias/noticias.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    CommonModule,
    NavegacionComponent,
    HeaderComponent,
    MenusComponent,
    CarruselComponent,
    NoticiasComponent,
    ContactoComponent,
    MenuNavegacionComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent implements OnInit {
  constructor(private router: Router, private titleService: Title) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url.includes('form-licenciadeconducir')) {
          this.titleService.setTitle('Formulario - Solicitud de Licencia'); // Usando el servicio Title
        } else {
          this.titleService.setTitle('Municipalidad de Chiguayante'); // Usando el servicio Title
        }
      }
    });
  }
}
