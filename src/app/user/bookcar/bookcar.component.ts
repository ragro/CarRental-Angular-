import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.services';
import { ActivatedRoute, Params, RouterLink, Router } from '@angular/router';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-bookcar',
  templateUrl: './bookcar.component.html',
  styleUrls: ['./bookcar.component.css']
})
export class BookcarComponent implements OnInit {

  msg : string="";
  id:string;
  car: Car;
  fdate:Date=null;
  tdate:Date=null;
  fcity:string="";
  tcity:string="";
  verified:boolean=false;
  proceed:boolean=false;
  amount:number;
  days:number;
  data:any;
  payment:boolean;
 


  constructor(private route: ActivatedRoute,
              private carService : CarService) { }

  ngOnInit() {
    this.verified= JSON.parse(localStorage.getItem('user')).verified;

    this.route.params.subscribe(
      (params:Params)=>{
        this.id=params['car_id'];
        this.carService.getCarbyId(this.id).subscribe(
          (response)=>{
            this.car=response;
            this.fcity=this.car.city
          }
        )
      }
    )
  }

}
