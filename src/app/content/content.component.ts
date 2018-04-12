import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  ListOfContent;
  BooleanAdd = true;
  Aux;
  CheckAcumulador = new Array();
  NumberAux = 0;
  PositionAux = 0;
  i=0;
  Booleano = true;
  titulo;
  parrafo;
  subtitulo;
  BooleanTable = true;
  ListEdit;
  List;
  formElement;
  request;
  idproducto;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.ListContent();
    this.Listarproductos();
  }
  EditReg(id : number){
    this.titulo = document.getElementById("titulo-ed");
    this.subtitulo = document.getElementById("subtitulo-ed");
    this.parrafo = document.getElementById("parrafo-ed");
    this.idproducto = document.getElementById("idproducto");
    this.contentService.CrudFunction(
    4,
    id,
    this.titulo.value,
    this.subtitulo.value,
    this.parrafo.value,  
   '0',
   this.idproducto.value
   )
    .subscribe((data) => { 
      console.log(data);
      this.Aux = data;
    });
    location.reload();
  }

  ShowAdd(){
    this.BooleanTable = false;    
  }

  ShowEdit(id : number){
    this.BooleanAdd = false;
    this.BooleanTable=false;
    this.contentService.getJsonForID(id,this.ListOfContent)
    .subscribe(resultado => this.ListEdit = resultado);
 
  }

  Return(){
    this.BooleanTable = true;
    this.BooleanAdd = true;
  }

  ListContent(){
   this.contentService.CrudFunction(1,0,'','','','','')
    .map((response) => response.json())
    .subscribe((data) => { 
      this.ListOfContent = data;
    });
  }
  Listarproductos(){
    this.contentService.listProduct()
     .map((response) => response.json())
     .subscribe((data) => { 
       this.List = data;
     });
   }

  onCheck(id : number){  
    this.Booleano=true;    
    if(this.NumberAux == 0){
      this.CheckAcumulador[0] = id;
      this.NumberAux++;
    }else{
      for(this.i = 0; this.i<this.NumberAux ; this.i++){
        if(id == this.CheckAcumulador[this.i]){
          this.CheckAcumulador.splice(this.i, 1);
          this.Booleano = false;
          this.NumberAux++;
        }
      }
      if(this.Booleano){
          this.CheckAcumulador[this.NumberAux] = id;
          this.NumberAux++;
        }
      }
    }
    DeleteReg(){
      for(this.i=0; this.i<this.NumberAux; this.i++){
        if(this.CheckAcumulador[this.i] == undefined){
          console.log("Indefinido");
        }else{
          this.contentService.CrudFunction(2, this.CheckAcumulador[this.i],"","","","","")
          .subscribe((data) => { 
            this.Aux = data;
          });
        }
      }
      location.reload();
    }

    Store(){
      this.formElement = document.getElementById("Formulario");
      this.request = new XMLHttpRequest();
      this.request.open("POST", "php/script/store-content.php");
      console.log(this.request.send(new FormData(this.formElement)));
      // location.reload();
    }
}
