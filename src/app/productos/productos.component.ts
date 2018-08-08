import { Component, OnInit } from '@angular/core';
import {Productos} from '../productos-class';
import {PRODUCTOS} from '../mock-productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {

  productos = PRODUCTOS; //aquí asignamos a la variable 'products'el mock externo llamado 'PRODUCTOS'
  selectedProduct: Productos; //Productos -> nombre de la clase

  constructor() { }

  ngOnInit() {
  }

  onSelect(prod: Productos): void {
    this.selectedProduct = prod;
   }
 

}
