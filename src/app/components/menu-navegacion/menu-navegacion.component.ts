import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-navegacion',
  standalone: true,
  imports: [],
  templateUrl: './menu-navegacion.component.html',
  styleUrl: './menu-navegacion.component.css',
})
export class MenuNavegacionComponent {
  constructor(private router: Router) {}

  goToLicenciaConducir() {
    this.router.navigate(['/form-licenciadeconducir.html']);
  }

  redirigirFormulario() {
    window.location.href = '/src/formulario.html';
  }
}
