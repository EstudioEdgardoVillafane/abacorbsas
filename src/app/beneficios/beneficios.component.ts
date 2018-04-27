import { Component, OnInit, Input } from '@angular/core';
import {Beneficios} from '../beneficios-class';
import {BENEFICIOS} from '../mock-beneficios';
import {BeneficioService} from '../beneficio.service';
import { DetBeneficios } from '../detalle-beneficios/det-benef-class';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.css']
})
export class BeneficiosComponent implements OnInit {
  beneficios = BENEFICIOS; //aquí asignamos a la variable 'products'el mock externo llamado 'PRODUCTOS'
  selectedBenefic: Beneficios; //Productos -> nombre de la clase

  @Input() toto: DetBeneficios;
  @Input() totodos: DetBeneficios;
  variable: boolean;
  constructor( private route: ActivatedRoute, private location: Location, private benefService: BeneficioService) { }

  ngOnInit() {
   this.getFromUrl();
  }

  getFromUrl(): void{
    const id =+ this.route.snapshot.paramMap.get('id');
    this.benefService.getFromUrl(id)
    .subscribe(totodos => this.totodos = totodos);
  }

  onClick(id : number){
  
    BeneficioService.prototype.getID(id).subscribe(totodos=> this.toto = totodos)
    this.getFromUrl();

  }

}
