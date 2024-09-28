import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { FormLicenciadeconducirComponent } from './components/form-licenciadeconducir/form-licenciadeconducir.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      
    ],
  },
  {
    path: 'form-licenciadeconducir',
    component: FormLicenciadeconducirComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


