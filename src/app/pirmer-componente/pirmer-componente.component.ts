import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../Clase/usuario';
import { ApiHelperService } from '../helper/api-helper.service';
import { UsuarioHelperService } from '../helper/usuario-helper.service';

@Component({
  selector: 'app-pirmer-componente',
  templateUrl: './pirmer-componente.component.html',
  styleUrls: ['./pirmer-componente.component.css']
})
export class PirmerComponenteComponent implements OnInit {
  usuario: Usuario;

  constructor(private ruteo:Router,private api:ApiHelperService, private userSer:UsuarioHelperService) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {

  }
  loguear() {
    this.api.loguear(this.usuario).subscribe(
      then => {
        this.userSer.setUsuario(then[0]);
        //this.ruteo.navigateByUrl('usuario');
    }
    );
  }

}
