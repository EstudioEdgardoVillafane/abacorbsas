import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalle-beneficios.component.html',
  styleUrls: ['./detalle-beneficios.component.css']
})

export class DetalleBeneficiosComponent implements OnInit {
  
  detail_benef: Array<object>;
  benefId:number;
  selectedBenefic:object;

  constructor(private ruta:ActivatedRoute) {
    this.detail_benef = [
      {id:1 , nombre: 'Arquitectos', data:'Inscripción, capacitaciones, preguntas frecuentes',imagen:"/assets/img/arquitectos.png"},
      {id:2 , nombre: 'Comercios', data:'Solicitud de lista de precios,folletería, capacitaciones, preguntas frecuentes.',imagen:"/assets/img/comercios.png"},
      {id:3 , nombre: 'Instaladores', data:'Inscribite en nuestro programa de beneficios,capacitaciones,preguntas frecuentes',imagen:"/assets/img/instaladores.png"},
      {id:4 , nombre: 'Distribuidores', data:'Solicitud de lista de precios,folletería, capacitaciones, preguntas frecuentes.',imagen:"/assets/img/distribuidores.png"}
    ]
   }
 
  ngOnInit() {
    this.ruta.params.subscribe(params=>{
      this.benefId = params['benefId'];
      this.selectedBenefic = this.findRevest();
    })
  }

  filtroPorId(beneficio){
    return beneficio.id == this;
  }

  findRevest(){
    return this.detail_benef.filter(this.filtroPorId,this.benefId)[0];
  }
  

}

