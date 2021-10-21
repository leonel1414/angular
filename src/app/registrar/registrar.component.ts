import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../Clase/usuario';
import { ApiHelperService } from '../helper/api-helper.service';
import { UsuarioHelperService } from '../helper/usuario-helper.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  usuario: Usuario;

  constructor(private ruteo:Router,private api:ApiHelperService, private userSer:UsuarioHelperService) {
    this.usuario =new Usuario;
   }

  ngOnInit(): void {
  }
  ingresar() {
      this.api.ingresar(this.usuario).subscribe(
      then => {
        this.userSer.setUsuario(then[0]);
        //this.ruteo.navigateByUrl('usuario');
    }
    );
  }

}
