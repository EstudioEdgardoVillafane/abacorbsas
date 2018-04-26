import { Injectable } from '@angular/core';
import { DETBENEFICIOS } from "./detalle-beneficios/det-benef-mock";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class BeneficioService {

  constructor() { }
  getID(id : number){
    return of(DETBENEFICIOS.find(primero=> primero.id == id))
  }
  getFromUrl(id : number){
    return of(DETBENEFICIOS.find(primero=> primero.id == id))
  }
}
