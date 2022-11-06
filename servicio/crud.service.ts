import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { usuario } from './usuario';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string='http://localhost/usuarios/';
  constructor(private clienteHttp:HttpClient) { }

  crearUsuario(datosUsuario:usuario):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosUsuario);
  }

  ObtenerUsuarios(){
  return this.clienteHttp.get(this.API);
  }
  BorrarUsuario(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+id);
  }
  ObtenerUsuario(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }
  EditarUsuario(id:any,datosUsuario:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar=1",datosUsuario);
  }
}
