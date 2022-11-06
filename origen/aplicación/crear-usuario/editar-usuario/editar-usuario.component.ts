import { Component, OnInit } from '@angular/core';

import{FormGroup, FormBuilder} from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent implements OnInit {
  formularioDeUsuarios:FormGroup;
  elID:any;

  constructor(
    private ActiveRoute:ActivatedRoute,
    private crudService:CrudService,
    public formulario:FormBuilder
  ) { 
    this.elID=this.ActiveRoute.snapshot.paramMap.get('id');
    console.log(this.elID);

    this.crudService.ObtenerUsuario(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
    this.crudService.ObtenerUsuario(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formularioDeUsuarios.setValue({
          nombre: respuesta[0] ['nombre'],
          correo:respuesta[0] ['correo']
        });
      }
    );
    this.formularioDeUsuarios=this.formulario.group(
        {
          nombre: [''],
          correo: ['']
        }
      )
      }
    );
  }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formularioDeUsuarios);
    this.crudService.EditarUsuario(this.elID,this.formularioDeUsuarios.value).subscribe(()=>{

    });
  }
}
