import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder} from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  formularioDeUsuarios:FormGroup;


  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router
    ) { 

    this.formularioDeUsuarios=this.formulario.group({
      nombre:[''],
      correo:['']
    });
  }

  ngOnInit(): void {
  }
  enviarDatos():any {
    console.log("Me precionaste");
    console.log(this.formularioDeUsuarios.value);
    this.crudService.crearUsuario(this.formularioDeUsuarios.value).subscribe();

    this.ruteador.navigateByUrl('/listar-usuario');
  }
}
