import { Routes } from '@angular/router';
import { FormLicenciadeconducirComponent } from './components/form-licenciadeconducir/form-licenciadeconducir.component';
import { MenuNavegacionComponent } from './components/menu-navegacion/menu-navegacion.component';

export const routes: Routes = [
  { path: '', component: MenuNavegacionComponent },
  {
    path: 'form-licenciadeconducir',
    component: FormLicenciadeconducirComponent,
  },
];
