import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mensaje } from '../Clase/mensaje';
import { Usuario } from '../Clase/usuario';
import { ApiHelperService } from '../helper/api-helper.service';
import { UsuarioHelperService } from '../helper/usuario-helper.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public usuarioActual!: Usuario;
  usuarios!: Usuario[];
  mensaje!: Mensaje[];

  setearusuario(usuarioSeleccionado: Usuario) {
    
    this.api.TraerMensajes(this.usuarioActual.id, this.usuarioActual.token, usuarioSeleccionado.id).subscribe(then => this.mensaje = then);
    
  }
  constructor(private api: ApiHelperService, private userSer: UsuarioHelperService) {
    this.usuarioActual = this.userSer.getUsuario();
    this.api.traerUsuario(this.usuarioActual.id,this.usuarioActual.token).subscribe(then => this.usuarios = then);
  }

  ngOnInit(): void {
  }

}
