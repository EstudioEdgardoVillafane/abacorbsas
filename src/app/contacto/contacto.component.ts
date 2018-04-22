import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  name;
  phone;
  email;
  question;
  BooleanToAlertNombre = false;
  BooleanToAlertEmail = false;
  BooleanToAlertTelefono = false;
  BooleanToAlertMensaje = false;
  BooleanToValidate = false;

  constructor(private contactoService : ContactoService) { }

  ngOnInit() {

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
