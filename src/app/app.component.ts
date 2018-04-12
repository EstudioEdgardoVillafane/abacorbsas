import { Component, OnInit, ElementRef, Renderer, Input } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent implements OnInit{
     
    constructor() {
    }

    ngOnInit(){
    }

    //funciones de jquery

    public bajaBot(){
        alert();
        //$('.bot-nav').css({top:20,position:'absolute'});
        $('body').css('background','blue');
    }
 
}

