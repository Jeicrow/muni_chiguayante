import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NavegacionComponent } from "./components/navegacion/navegacion.component";
import { HeaderComponent } from "./components/header/header.component";
import { MenusComponent } from "./components/menus/menus.component";
import { CarruselComponent } from "./components/carrusel/carrusel.component";
import { MenuNavegacionComponent } from "./components/menu-navegacion/menu-navegacion.component";
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ContactoComponent } from "./components/contacto/contacto.component";
import { FormLicenciadeconducirComponent } from "./components/form-licenciadeconducir/form-licenciadeconducir.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule ,CommonModule, MatIconModule, NavegacionComponent, HeaderComponent, MenusComponent, CarruselComponent, MenuNavegacionComponent, NoticiasComponent, ContactoComponent, FormLicenciadeconducirComponent],
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  title = 'muni_chiguayante';

}
