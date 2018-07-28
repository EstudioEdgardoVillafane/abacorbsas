import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map'

import { PaginadorService } from '../services/paginador.service'

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent implements OnInit {

  constructor(private contentService: ContentService, private http: Http, private paginadorService:PaginadorService) { }

  ListOfContent: any[];
  Aux;

  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedUses: any[];

  ngOnInit() {
  //  this.Listado();

  this.contentService.listProduct()
  .map((response: Response) => response.json())
  .subscribe(data => { 
    this.allItems = data; 

     // initialize to page 1
      this.setPage(1);
  });

    // get dummy data
    // this.http.get('../../assets/json/dummy-json.json')
    // .map((response: Response) => response.json())
    // .subscribe(data => {
    //     // set items to json response
    //     this.allItems = data;

    //     // initialize to page 1
    //     this.setPage(1);
    // });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.paginadorService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedUses = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

  // Listado(){
  //   this.contentService.listProduct()
  //   .map((response) => response.json())
  //   .subscribe(data => { 
  //     this.ListOfContent = data; 
  //   });
  // }
}
