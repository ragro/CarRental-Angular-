import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CarService } from '../../services/car.services';
import { Car } from '../../models/car.model';


@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  cars : Car[] = [] ;
  @ViewChild('form') findForm : NgForm;

  constructor(private carService: CarService,
              private router : Router,
              private route : ActivatedRoute) { }

  ngOnInit() {

    this.carService.getCar().subscribe(
      (car) => {
        this.cars.push(...car);
      },
      err => {
        console.log("Something went wrong");
      }
    );
  }

  onFind(){
      this.carService.findCarbyFilter(this.findForm.value).subscribe(
          (car) => {
            this.cars = [];
            this.cars.push(...car);
          },
          err => {
              console.log("Car not found by given filter");
          }
      )
  }

  onBook(car){
    this.router.navigate(["car",car._id],{relativeTo:this.route});
  }


}




