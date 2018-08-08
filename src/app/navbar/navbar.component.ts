import { Component, OnInit ,Input } from '@angular/core';
import { HostListener} from "@angular/core";
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  @Input() isScrolled = true; 
  constructor() { }

  ngOnInit() {
   
 

 }
}