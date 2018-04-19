import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ContactoService {

  constructor(private http: Http) { }
  Send(email: string, consulta: string, nombre: string, telefono: number){
    return this.http.get('php/script/send-mail.php?email='+email+'&consulta='+consulta+'&nombre='+nombre+'&telefono='+telefono);
  }
}
