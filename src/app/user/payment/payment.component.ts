import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.services';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  amount : number;
  constructor(private carService : CarService) { }

  ngOnInit() {
    this.amount = this.carService.amount;
  }

  onPayment(){
    this.carService.bookCar();
  }

}
