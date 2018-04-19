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

  constructor(private contactoService : ContactoService) { }

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

}
