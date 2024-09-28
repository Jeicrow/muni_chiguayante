import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { FormLicenciadeconducirComponent } from './components/form-licenciadeconducir/form-licenciadeconducir.component';
import { MenuNavegacionComponent } from './components/menu-navegacion/menu-navegacion.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuNavegacionComponent,
    FormLicenciadeconducirComponent,
  ],
  declarations: [],
  providers: [Title],
  bootstrap: [],
})
export class AppModule {}

