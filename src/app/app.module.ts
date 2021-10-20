import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PirmerComponenteComponent } from './pirmer-componente/pirmer-componente.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegistrarComponent } from './registrar/registrar.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    PirmerComponenteComponent,
    RegistrarComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
 providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
