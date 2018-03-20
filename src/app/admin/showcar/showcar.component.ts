import { Component, 
         OnInit, 
         OnDestroy,
         Input} from '@angular/core';

import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.services';
import { ActivatedRoute, Router } from '@angular/router';
// import { relative } from 'path';

@Component({
  selector: 'app-showcar',
  templateUrl: './showcar.component.html',
  styleUrls: ['./showcar.component.css'],
  // inputs:['carSb']
})
export class ShowcarComponent implements OnInit, OnDestroy {
    cars : Car[] = [];
    

  constructor( private carService: CarService, 
               private route: ActivatedRoute,
               private router : Router) { }

  ngOnInit() {

    this.carService.getCar().subscribe(
    
      (car) => {
        // console.log(car);
        
        this.cars.push(...car);
        // this.carService.cars.push(...car);
        // this.carService.carsUpdated.next(this.cars.slice());
      },
      err => {
        console.log(err);
      }
    );
   
  }

  showCar(car_id){
   console.log(car_id);
    // const cars = JSON.parse(this.carService.some);
    // this.router.navigate([car._id],{relativeTo:this.route});
  }

  editCar(car){
     console.log("Edit clicked");
     this.router.navigate(["editcar"],{relativeTo:this.route});
  }

  ngOnDestroy(){
    this.cars = [];
  }

}
