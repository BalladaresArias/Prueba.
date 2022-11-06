import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  Usuarios:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.ObtenerUsuarios().subscribe(respuesta=>{
      console.log(respuesta);
      this.Usuarios=respuesta;
    });
  }
  borrarRegistro(id:any, iControl:any){
    console.log(id);
    console.log(iControl);
    this.crudService.BorrarUsuario(id).subscribe((respuesta)=>{
      this.Usuarios.splice(iControl,1);
    });
  }
}
