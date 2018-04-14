import { Component, OnInit } from '@angular/core';
import {Productos} from '../productos-class';
import {PRODUCTOS} from '../mock-productos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos = PRODUCTOS; //aquí asignamos a la variable 'products'el mock externo llamado 'PRODUCTOS'
  selectedProduct: Productos; //Productos -> nombre de la clase

  constructor() { }

  ngOnInit() {
  }

  onSelect(prod: Productos): void {
   // alert('hola' + prod.id );
    this.selectedProduct = prod;

   }
 

}
