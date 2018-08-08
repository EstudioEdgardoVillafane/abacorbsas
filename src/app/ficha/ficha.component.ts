import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';

import { FichaService, Ficha } from '../ficha.service';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {

  ficha:any= {};
  
  constructor(private _activatedRoute:ActivatedRoute , private _fichaService:FichaService) { 

  this._activatedRoute.paramMap.subscribe(params => {
   
    this.ficha=this._fichaService.getFicha(params.get('ficha_id'));

    //console.log(this.ficha);
  });
} 
ngOnInit() {
    // this.fichas=this._fichaService.getFicha();
    // console.log(this.fichas);
  }
}
