import { Component, 
         OnInit, 
         ViewChild 
       } from '@angular/core';

import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('f') form : NgForm;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(){
   
    this.authService.signIn(this.form.value.username, this.form.value.password);
     this.form.reset();
  }
}
