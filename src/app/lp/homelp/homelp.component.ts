import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homelp',
  templateUrl: './homelp.component.html',
  styleUrls: ['./homelp.component.css']
})
export class HomelpComponent implements OnInit {

  //Variables

  titleOfTheLp : string;
  

  constructor(
    private activatedRoute : ActivatedRoute
  ) { }



  ngOnInit() {
    //Get the info of the url
    this.titleOfTheLp = this.activatedRoute.snapshot.paramMap.get('abd');
  }

}
