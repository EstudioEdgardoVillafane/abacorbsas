import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContentService } from '../content.service';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent implements OnInit {
  
  detail_prod: Array<object>;
  prodId:number;
  prodSelected:object;
  ListOfUsos;

  constructor(private ruta:ActivatedRoute, private contentService: ContentService) {
    this.detail_prod = [
      {id:1 ,nombre: 'Abamix Impermeable',detalle:'Adhesivo impermeable multiuso ideal para Cerámica convencional piezas pre-moldeadas de hormigón hormigón celular baldosas adoquines cementicios ',imagen:"/assets/img/impermeable.png",imagenDet:"/assets/img/det-prod/impermeable.jpg" },
      {id:2 ,nombre: 'Abamix Premium',detalle:'Mezcla adhesiva premium ideal para: granito natural, compactos, porcelanato y cerámica convencional.',imagen:"/assets/img/premium.png",imagenDet:"/assets/img/det-prod/premium.jpg"},
      {id:3 ,nombre: 'Membrana Cementicia',detalle:'Membrana cementicia flexible ideal para: Hormigón, mamposterías, lozas de concreto, terrazas, estacionamientos  y sótanos.',imagen:"/assets/img/membranacement.png",imagenDet:"/assets/img/det-prod/cementicia.jpg"},
      {id:4 ,nombre: 'Abaplak Multifuncion',detalle:'Material bi-funcional de secado rápido  para ser utilizado en obra con solo  agregar agua, puede ser utilizado como pasta de agarre o masilla para tratamiento de juntas. Masilla para placas de yeso tipo Durloc Masilla para pared y placas tipo Knauf',imagen:"/assets/img/det-prod/multifunc.png"},
      {id:5 ,nombre: 'Revoque fino al Yeso',detalle:'Revoque fino al yeso ideal para: Paredes de ladrillo común, ladrillos huecos cerámicos, bloques de hormigón, cielorrasos armados y soportes de hormigón.',imagen:"/assets/img/yeso.png",imagenDet:"/assets/img/det-prod/yeso.jpg"},
      {id:6 ,nombre: 'Stuko Abacor',detalle:'Revoque fino a la cal interior / exterior ideal para: soportes tipo revoque grueso',imagen:"/assets/img/stukor.png",imagenDet:"/assets/img/det-prod/stuko.jpg"},
      {id:7 ,nombre: 'Pastina Impermeable',detalle:'Pastina impermeable ideal para:  Tomados de juntas en pisos y revestimientos de cerámica convencional, mosaicos cementicios bi-capas y mono-capas',imagen:"/assets/img/pastina.png",imagenDet:"/assets/img/det-prod/pastina.png"},
      {id:8 ,nombre: 'Mortero Base Coat',detalle:'Mortero cementicio ideal para:Paneles de polietileno expandido,placas de yeso, bloques de hormigóncelular en autoclave (HCCA), hormigón celular',imagen:"/assets/img/mortero.png",imagenDet:"/assets/img/det-prod/mortero.png"}
    ]
   }
 

  ngOnInit() {
    this.ruta.params.subscribe(params=>{
      this.prodId = params['prodId'];
      this.prodSelected = this.findRevest();
      this.contentService.CrudFunction(5,this.prodId,'','','','','')
        .map((response) => response.json())
        .subscribe((data) => { 
      this.ListOfUsos = data;
      });
    })
    
  }
  filtroPorId(producto){
    return producto.id == this;
  }

  findRevest(){
    return this.detail_prod.filter(this.filtroPorId,this.prodId)[0];
  }
  

}