import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent implements OnInit {

  constructor(private contentService: ContentService) { }

  ListOfContent;

  ngOnInit() {
    this.contentService.CrudFunction(1,0,'','','','')
    .map((response) => response.json())
    .subscribe((data) => { 
      this.ListOfContent = data;
    });
  }
}
