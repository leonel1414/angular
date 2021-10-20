import { Injectable } from '@angular/core';
import { Usuario } from '../Clase/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioHelperService {

  constructor() { }
  private usuario!: Usuario;

  setUsuario(usuario: Usuario) {
     return this.usuario =usuario;
  }
  getUsuario() {
    return this.usuario;
  }
}
