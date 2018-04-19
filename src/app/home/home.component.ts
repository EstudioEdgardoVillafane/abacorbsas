import { Component, OnInit } from '@angular/core';
import {Productos} from '../productos-class';
import {PRODUCTOS} from '../mock-productos';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos = PRODUCTOS; //aquí asignamos a la variable 'products'el mock externo llamado 'PRODUCTOS'
  selectedProduct: Productos; //Productos -> nombre de la clase
  name;
  phone;
  email;
  question;
  
  constructor( private contactoService: ContactoService) { }

  ngOnInit() {
  }
  onSend(){
    this.name = document.getElementById("name");
    this.phone = document.getElementById("phone");
    this.email = document.getElementById("email");
    this.question = document.getElementById("question");
    this.contactoService.Send(this.email.value,this.question.value,this.name.value,this.phone.value)
    .subscribe((data) => {
      console.log(data);
      location.href="/enviado";
    });
  }

  onSelect(prod: Productos): void {
   // alert('hola' + prod.id );
    this.selectedProduct = prod;

   }
 

}
