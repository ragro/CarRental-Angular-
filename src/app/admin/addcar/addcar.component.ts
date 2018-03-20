import { Component, 
         OnInit } from '@angular/core';
import { FormGroup,
         FormControl
       } from '@angular/forms';
import { CarService } from '../../services/car.services';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {

  carForm : FormGroup = new FormGroup
  ({
      'name' : new FormControl(),
      'price': new FormControl(null),
      'rate' : new FormControl(),
      'city' : new FormControl(),
      'number':new FormControl(),
      'image': new FormControl(),
      'category': new FormControl()
  });

//   this.myGroup = new FormGroup({
//     firstName: new FormControl()
//  });

  constructor(private carService : CarService) { }

  ngOnInit() {
  }

  onAdd(){
      // console.log(this.carForm.value);
      this.carService.addCar(this.carForm.value);
  }
}
