import { Component, OnInit } from '@angular/core';
import { AdminService } from './../admin.service';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
// import { Md5 } from "md5-typescript";
 


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private AdminService : AdminService) { }

  UserOnline = true;
  userValue ;
  Listado;
  usuario;
 contrasena;
  Obj;
 
  onClick(){

    this.usuario=document.getElementById("usuario");
    this.contrasena= document.getElementById("contrasena");
   
    this.AdminService.getJsonUSER(this.usuario.value,this.Listado)
    .subscribe((data) => { 
      this.userValue = data;
    });
    if(this. userValue == undefined){
      console.log(this.contrasena);
    }else{
      if(this.contrasena.value == this.userValue.u_contrasena){
        this.UserOnline = false;
      }else{
        console.log(this.contrasena);
      }
    }
  }




  ngOnInit() {
    this.AdminService.Conect(1,0,"0","0")
    .map((response) => response.json())
    .subscribe((data) => { 
      this.Listado = data;
    });
  }

}

