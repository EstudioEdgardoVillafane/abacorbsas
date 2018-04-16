import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-item-uso',
  templateUrl: './item-uso.component.html',
  styleUrls: ['./item-uso.component.css']
})
export class ItemUsoComponent implements OnInit {

  List;
  ListSelect;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private usoService: ContentService 
  ) { }

  ngOnInit() {
    this.usoService.CrudFunction(1,0,'','','','','')
    .map((response) => response.json())
    .subscribe((data) => { 
      this.List = data;
      this.getUso(this.List);
    });
    this.route.snapshot.params['slug'].replace(/-/g,' ');
  }
 
  getUso(json): void {
    const name = this.route.snapshot.paramMap.get('nombre');
    this.usoService.getJsonForName(name,json)
    .subscribe(resultado => this.ListSelect = resultado);
  }
}
