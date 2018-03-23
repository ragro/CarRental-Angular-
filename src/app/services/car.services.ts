import { Injectable } from "@angular/core";
import { Http,
         Response,
         Headers } from '@angular/http';
import 'rxjs/Rx';
import { Subject } from "rxjs/Rx";
import { Observable } from 'rxjs/Observable';
import { FlashMessage} from 'angular-flash-message';

import { Car } from "../models/car.model";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";


 
@Injectable()

export class CarService{

    amount:number;
    bookedCar_id;
    user_id;

    cars : Car[] = [];
    // some = localStorage.getItem('cars');
    
    constructor(public http: Http,
                public router: Router,
                public flashmessage : FlashMessage) 
    {        
        this.http.get("http://localhost:8081/car/showcar").map(
            (response: Response) => {
                this.cars.push(...response.json());   
                console.log(response.json());            
                
            }
            
        )   
    }

    setAmount(charge:number, carid, userid){
        this.amount = charge;
        this.bookedCar_id = carid;
        this.user_id = userid;
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

    bookCar(){
        
        
        let header= new Headers();
        header.append('Content-Type','application/json');

        this.http.post("http://localhost:8081/car/payment/"+this.bookedCar_id+"/"+this.user_id,{headers:header}).subscribe(
            (response:Response) => {
                console.log(response.json().success);
                // if(!response.json().success){
                //     this.flashmessage.success("Sorry, Your payment could not be done..", 
                //     { delay: 2500, generalClass: 'alert alert-danger' });

                //     this.router.navigate(["/user/car/"+this.bookedCar_id+"/payment"]);
                // }else{
                //     this.flashmessage.success("Yeah.. Your Car has booked", 
                //     { delay: 2500, generalClass: 'alert alert-danger' });

                //     this.router.navigate(["/user"]);
                // }
            }
        )
    }
}