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
  BooleanToAlertNombre = false;
  BooleanToAlertEmail = false;
  BooleanToAlertTelefono = false;
  BooleanToAlertMensaje = false;
  BooleanToValidate = false;
  

  constructor( private contactoService: ContactoService) { }

  ngOnInit() {
  }
 

  onSelect(prod: Productos): void {
   // alert('hola' + prod.id );
    this.selectedProduct = prod;

   }
   ValidateForm(){
    this.name = document.getElementById('name');
    this.phone = document.getElementById('phone');
    this.email = document.getElementById('email');
    this.question = document.getElementById('question');


    if(this.name.value == ""){
      this.BooleanToAlertNombre = true;
    }else{
      this.BooleanToAlertNombre = false;
    } 
    if(this.phone.value == ""){
      this.BooleanToAlertTelefono = true;
    }else{
      this.BooleanToAlertTelefono= false;
    } 
    if(this.email.value == ""){
      this.BooleanToAlertEmail = true;
    }else{
      this.BooleanToAlertEmail = false;
    }
    if(this.question.value == ""){
      this.BooleanToAlertMensaje = true;
    }else{
      this.BooleanToAlertMensaje = false;
    }
    if(this.name.value != "" && this.email.value != "" && this.phone.value !=""&& this.question.value !=""){
      this.BooleanToValidate =true;
    }
    return this.BooleanToValidate;
  
  }
  onSend(){

    if(this.ValidateForm()){
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
  }
}
