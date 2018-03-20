import { Injectable } from "@angular/core";
import { Http,
         Response,
         Headers } from '@angular/http';
import 'rxjs/Rx';
import { Subject } from "rxjs/Rx";
import { Observable } from 'rxjs/Observable';

import { Car } from "../models/car.model";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";


 
@Injectable()

export class CarService{

    cars : Car[] = [];
    // some = localStorage.getItem('cars');
    
    constructor(public http: Http,
                public router: Router) 
    {        
        this.http.get("http://localhost:8081/car/showcar").map(
            (response: Response) => {
                this.cars.push(...response.json());   
                console.log(response.json());            
                
            }
            
        )   
    }



    getCar(){

        return this.http.get("http://localhost:8081/car/showcar").map(
            (response: Response) => {
                // this.cars.push(...response.json());
                var data = response.json();
                // console.log(data);
                return data;
            }
        )

    }

    findCarbyFilter(form){
        return this.http.post("http://localhost:8081/car/findcar",form).map(
            (response : Response) => {
                var data = response.json();
                return data;
            }
        )
    }

    getCarbyId(id){

        return this.http.get("http://localhost:8081/car/edit/"+id)
        .map( response =>{
           return response.json();     
            }
        )    
    }
   

    addCar(car:Car){
        // console.log(car);
        let headers= new Headers();
        headers.append('Content-Type','application/json');

          this.http.post("http://localhost:8081/car/addcar",car,{headers:headers})
          .subscribe((response)=>{
                console.log(response.json());      
                this.router.navigate(["admin/showcar"]);
            }, ()=>{
                
            });


    }

    editCar(id:number,car:Car){

        // console.log(id+"  "+car.name);
            let header = new Headers();
            header.append('Content-Type','application/json');

            this.http.put("http://localhost:8081/car/"+id,car,{headers:header})
            .subscribe((response : Response)=>{
                console.log(response.json());                             
          });
    }
}