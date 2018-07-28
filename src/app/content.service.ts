import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
// import { EditorModule } from '@tinymce/tinymce-angular';

@Injectable()
export class ContentService {

  constructor(private http: Http) { }

  CrudFunction(FunctionPhp: number, id: number, titulo: string, subtitulo: string, descripcion: string, imagen: string,idproducto){
    return this.http.get('php/script/crud-content.php?data='+FunctionPhp+'&id='+id+'&titulo='+titulo+'&subtitulo='+subtitulo+'&descripcion='+descripcion+'&imagen='+imagen+'&idproducto='+idproducto);
  }

  listProduct(){
    return this.http.get('http://localhost/abacorbsas/src/php/scripts/list_productos.php');
    
  }

  getJsonForID(id:number, json){
    return of(json.find((primero => primero.u_id === id)));
  }
  getJsonForName(name:string, json){
    return of(json.find((primero => primero.u_titulo === name)));
  }
  getJsonForNameTwo(name:string, json){
    return of(json.find((primero => primero.nombre === name)));
  }
}
