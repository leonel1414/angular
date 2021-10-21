import { HttpClient } from '@angular/common/http';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Mensaje } from '../Clase/mensaje';
import { Usuario } from '../Clase/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {
  Api: string;

  constructor(private http: HttpClient) {
    this.Api = ('https://apiloginbetran.herokuapp.com/');
  }
  loguear(usuario: Usuario): Observable<Usuario[]> {
    return <Observable<Usuario[]>> (this.http.post(this.Api + 'Usuario/loguear',JSON.stringify(usuario)));
    
  }
  traerUsuario(id:number, token:string) {
    return <Observable<Usuario[]>> (this.http.post(this.Api + 'Usuario/traerTodos'+id,JSON.stringify({token:token})));
  }
  TraerMensajes(id: number, token: string, idDestino: number) {
     return <Observable<Mensaje[]>> (this.http.post(this.Api + 'Mensaje/traerTodos'+id+'/'+idDestino,JSON.stringify({token:token})));    
  }
  ingresar(usuario:Usuario):Observable<Usuario> {
    return <Observable<Usuario[]>>(this.http.post(this.Api + '/Usuario/crear', JSON.stringify(usuario));
    
  }
}
