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
  Send(email: string, question: string, name: string, phone: number){
    return this.http.get('php/script/send-mail.php?email='+email+'&question='+question+'&name='+name+'&phone='+phone);
  }
}
