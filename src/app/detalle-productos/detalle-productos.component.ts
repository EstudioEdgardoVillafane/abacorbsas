import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContentService } from '../content.service';
import { ProductosMock } from '../mock-caracterProd';
import { ProductosCaract, Productos } from '../productos-class';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent implements OnInit {

  detail_prod;
  ListOfUsos;
  ListSelect;

  constructor(private ruta:ActivatedRoute, private contentService: ContentService, private _router:Router) {

    this.detail_prod = [
      {id:1 ,nombre: 'Abamix-Impermeable',detalle:'Adhesivo impermeable multiuso ideal para Cerámica convencional piezas pre-moldeadas de hormigón hormigón celular baldosas adoquines cementicios.',imagen:"/assets/img/impermeable.png" },
      {id:2 ,nombre: 'Abamix-Premium',detalle:'Mezcla adhesiva premium ideal para: granito natural, compactos, porcelanato y cerámica convencional.',imagen:"/assets/img/premium.png"},
      {id:3 ,nombre: 'Membrana-Cementicia',detalle:'Membrana cementicia flexible ideal para: Hormigón, mamposterías, lozas de concreto, terrazas, estacionamientos  y sótanos.',imagen:"/assets/img/membranacement.png"},
      {id:4 ,nombre: 'Abaplak-Multifuncion',detalle:'Material bi-funcional de secado rápido  para ser utilizado en obra con solo  agregar agua, puede ser utilizado como pasta de agarre o masilla para tratamiento de juntas. Masilla para placas de yeso tipo Durloc Masilla para pared y placas tipo Knauf'},
      {id:5 ,nombre: 'Revoque-fino-al-Yeso',detalle:'Revoque fino al yeso ideal para: Paredes de ladrillo común, ladrillos huecos cerámicos, bloques de hormigón, cielorrasos armados y soportes de hormigón.',imagen:"/assets/img/yeso.png"},
      {id:6 ,nombre: 'Stuko-Abacor',detalle:'Revoque fino a la cal interior / exterior ideal para: soportes tipo revoque grueso',imagen:"/assets/img/stukor.png",imagenDet:"/assets/img/stuko.jpg"},
      {id:7 ,nombre: 'Pastina-Impermeable',detalle:'Pastina impermeable ideal para: Tomados de juntas en pisos y revestimientos de cerámica convencional, mosaicos cementicios bi-capas y mono-capas.',imagen:"/assets/img/pastina.png",color:[
        {"id":1,"name":"John Doe"},
        {"id":2,"name":"Don Joeh"}
    ]},
      {id:8 ,nombre: 'Mortero-Base-Coat',detalle:'Mortero cementicio ideal para: Paneles de polietileno expandido,placas de yeso, bloques de hormigóncelular en autoclave (HCCA), hormigón celular.',imagen:"/assets/img/mortero.png"}
    ]
   }

 
  ngOnInit() {
    this.getUso();
      this.contentService.CrudFunction(5,this.ListSelect.id,'','','','','')
        .map((response) => response.json())
        .subscribe((data) => { 
        this.ListOfUsos = data;
      });  
  }

  getUso(): void {
    const name = this.ruta.snapshot.paramMap.get('nombre');
    console.log(name)
    this.contentService.getJsonForNameTwo(name,this.detail_prod)
    .subscribe((resultado) => { 
      this.ListSelect = resultado;
      this.ListSelect.nombre = this.ListSelect.nombre.replace(/-/g,' '); 
    });
  }
  verFicha(idx:number){
    idx-=1;
    this._router.navigate(['/ficha',idx])
  }

}