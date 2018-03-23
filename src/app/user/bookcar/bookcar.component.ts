import { Component, OnInit, ViewChild } from '@angular/core';
import { CarService } from '../../services/car.services';
import { ActivatedRoute, Params, RouterLink, Router } from '@angular/router';
import { Car } from '../../models/car.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bookcar',
  templateUrl: './bookcar.component.html',
  styleUrls: ['./bookcar.component.css']
})
export class BookcarComponent implements OnInit {

  @ViewChild('form') form : NgForm;

  
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
              private carService : CarService,
              private router : Router) { }

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

  
  onContinue(car_id){
  
    var rate :number = Number(this.car.rate);
    var days : number= Math.abs(new Date(this.form.value.todate).getTime()-new Date(this.form.value.fromdate).getTime())/(1000*24*3600);
    
    var amount: number= days*rate ;
    var userId = JSON.parse(localStorage.getItem('user')).userid;

    if(new Date(this.form.value.todate).getTime()<new Date(this.form.value.fromdate).getTime()){
      this.msg="Please Choose Correct Date...";
    }else{
            if(new Date(this.form.value.fromdate).getTime()<new Date().getTime()){
                this.msg="Please Choose Correct Date...";
            }else{
              this.msg="";
              console.log("Amount to paid = "+amount);
              this.carService.setAmount(amount,car_id,userId);
              this.router.navigate(["payment"],{relativeTo:this.route});
            }
    }

 }

}
