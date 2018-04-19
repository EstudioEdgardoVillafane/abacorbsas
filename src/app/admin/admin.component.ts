import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from './../admin.service';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
 import { AppComponent } from '../app.component';


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
  BooleanAlertLogin = false;
  Aux : string;
 
  onClick(){
    this.usuario=document.getElementById("usuario");
    this.contrasena= document.getElementById("contrasena");
    this.AdminService.Conect(1,0,this.usuario.value,this.contrasena.value)
    .subscribe((data) => {
      console.log(data.text());
     if(data.text() == " 0"){
       this.BooleanAlertLogin = true;
      }else{
        localStorage.setItem("keyTwo","1");    
        location.href="admin/online/usos";
      }
    });
  }



  ngOnInit() {
    if(localStorage.getItem("keyTwo") == "1"){
      location.href="admin/online/usos";
    }
  }

}

