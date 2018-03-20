import { Component, 
        OnInit, 
        OnDestroy,
        Input
    } from '@angular/core';

import {    ActivatedRoute,
            Router,
            Params 
       } from '@angular/router';

import { Car } from '../../../models/car.model';
import { CarService } from '../../../services/car.services';


@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css'],
})

export class CarComponent implements OnInit{

    id : number;
    foundCar : Car;

    constructor(
                private route : ActivatedRoute, 
                private router : Router,
                private carService : CarService
               )
        {}   

  ngOnInit(){

        // console.log('cars det: ',this.carService.some); 
        // const cars = JSON.parse(this.carService.some);
        // console.log(cars.name);

        this.route.params
        .subscribe(
            (params:Params) => {
                this.id = params['id'];
            }
        );
      
        // this.carService.getCarbyId(this.id).subscribe(
        //     (data) => {
        //         this.foundCar = data;
        //         console.log(data);
        //     },  
        //     (err) => {
                
        //     }
        // );
    }
    
   @Input() car: Car;
   @Input() index : number;

}