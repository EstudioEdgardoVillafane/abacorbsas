import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
import { BackendUsuarioService } from '../backend-usuario.service';
@Component({
  selector: 'app-backend-usuarios',
  templateUrl: './backend-usuarios.component.html',
  styleUrls: ['./backend-usuarios.component.css']
})
export class BackendUsuariosComponent implements OnInit {

  ChangeEditar=true;
  ChangeAgregar=true;
  listado;
  var;
  CheckAcumulador = new Array();
  NumberAux=0;
  PositionAux = 0;
  i=0;
  Booleano = true;
  edit;
  edit_usuarios;
  u_usuario;
  u_mail;
  u_contrasena;

  constructor( private BackendUsuarioService:BackendUsuarioService ) { }

  ngOnInit() {
    this.Listar();
  }

  Show(){
    this.ChangeEditar= false;
  }

  Return(){
    this.ChangeEditar=true;
    this.ChangeAgregar=true;
  }

  Listar(){
    this.BackendUsuarioService.Conect(1,0,"0","0","0")
    .map((response) => response.json())
    .subscribe((data) => { 
      this.listado = data;
    });
  }

  Edit(u_id : number){
    this.u_usuario = document.getElementById("edit_usuario");
    this.u_mail = document.getElementById("edit_mail");
    this.u_contrasena = document.getElementById("edit_contrasena");
    
    this.BackendUsuarioService.Conect(4,u_id,this.u_usuario.value,this.u_mail.value,this.u_contrasena.value)
    .subscribe((data)=>{ this.var=data;});
    
    this.Listar();
  }

  Check(u_id : number){
    this.Booleano=true;    
    console.log("Contador: " + this.NumberAux);
    if(this.NumberAux == 0){
      this.CheckAcumulador[0] = u_id;
      this.NumberAux++;
      console.log("Primer numero en la lista: " + u_id)
    }else{
      for(this.i = 0; this.i<this.NumberAux ; this.i++){
        if(u_id == this.CheckAcumulador[this.i]){
          this.CheckAcumulador.splice(this.i, 1);
          this.Booleano = false;
          console.log("El numero: " + u_id + " está en la posicion: " + this.i);
          this.NumberAux++;
        }
      }
      if(this.Booleano){
          this.CheckAcumulador[this.NumberAux] = u_id;
          console.log("Se agrego en el numero: " + u_id + ", en la posicion: " + this.NumberAux);
          this.NumberAux++;
        }
      }
    }

  Eliminar(){
    for(this.i=0; this.i<this.NumberAux; this.i++){
      if(this.CheckAcumulador[this.i] == undefined){
        console.log("Indefinido");
      }else{
        this.BackendUsuarioService.Conect(2, this.CheckAcumulador[this.i],"0","0","0")
        .subscribe((data) => { 
          this.var = data;
        });
      }
  }
    this.Listar();
  }

  EditarForm(u_id : number){
    this.ChangeAgregar=false;
    this.ChangeEditar=false;
    this.BackendUsuarioService.getJsonID(u_id,this.listado)
    .subscribe(resultado => this.edit_usuarios = resultado);

  }

  Alta(){
    this.u_usuario = document.getElementById("u_usuario");
    this.u_mail = document.getElementById("u_mail");
    this.u_contrasena = document.getElementById("u_contrasena");

    this.BackendUsuarioService.Conect(
      3,
      0,
      this.u_usuario.value,
      this.u_mail.value,
      this.u_contrasena.value
    )
    .subscribe((result)=>{this.var=result;});
    this.Listar();

    this.ChangeEditar=true;
  }

}
