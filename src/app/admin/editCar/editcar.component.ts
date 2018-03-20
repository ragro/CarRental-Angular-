import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Car } from "../../models/car.model";
import { CarService } from "../../services/car.services";
import { ActivatedRoute, Router, Params } from "@angular/router";

@Component({
    selector: 'app-editcar',
    templateUrl: './editcar.component.html',
    styleUrls: ['./editcar.component.css'],
})

export class editCarComponent implements OnInit{

    @ViewChild('form') editForm : NgForm;

    id;
    carImage : string;


  name : string ;
  number : number;
  category : string;
  image : string ;
  city : string ;
  rate : number;
//   editCar : Car;

    constructor(private carService : CarService,
                private route : ActivatedRoute,
                private router : Router){
                
    }

    ngOnInit(){

        this.route.params.
        subscribe(
            (params : Params) => {
                this.id = params['id'];
            }
        );
        
            this.carService.getCarbyId(this.id)
            .subscribe(
                (data) => {
                                this.name = data.name;
                                this.number = data.number;
                                this.category = data.category;
                                this.image = data.image;
                                this.carImage = this.image;
                                this.city  = data.city;
                                this.rate = data.rate;

                        },
                            (err)=>{console.log(err)},
                            ()=>{
                                console.log("city name => "+this.city);
                            }
                    );        
            
            
    }

        onEdit(){
           let flag =  this.carService.editCar(this.id,this.editForm.value);
           console.log(flag);
        }

}