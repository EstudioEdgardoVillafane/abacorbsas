import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
// import { Md5 } from "md5-typescript";

@Injectable()
export class AdminService {
  
  constructor(private Http : Http) { }
  Conect(Funct: number, u_id : number, u_usuario : string, u_contrasena : string){
    
    return this.Http.get('php/scripts/usuarios.php?data='+Funct+'&u_id='+u_id+"&u_usuario="+u_usuario+"&u_contrasena="+u_contrasena);
     //Devuelve el resultado del php como objeto.
  }
  getJsonID(id : number, json){
    return of(json.find(primero => primero.u_id === id));
  } 
  getJsonUSER(usuario: string, json){
    return of(json.find(primero => primero.u_usuario ===usuario));
  } 

}
