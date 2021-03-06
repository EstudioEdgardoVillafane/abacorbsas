import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
@Component({
  selector: 'app-backend-cent',
  templateUrl: './backend-cent.component.html',
  styleUrls: ['./backend-cent.component.css']
})
export class BackendCentComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router : Router) {   }

  ngOnInit() {

  }
  goUso(){
    this.router.navigate(['usos'], {relativeTo: this.route});
  }
  goUser(){
    this.router.navigate(['usuarios'], {relativeTo: this.route});
  }
  closeSession(){
    localStorage.removeItem("keyTwo");
    location.href="../../home";
  }
}
