import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PirmerComponenteComponent } from './pirmer-componente/pirmer-componente.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  { path: 'login', component: PirmerComponenteComponent },
  { path: 'registrar', component: RegistrarComponent },
  {path:'usuario',component:UsuarioComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
