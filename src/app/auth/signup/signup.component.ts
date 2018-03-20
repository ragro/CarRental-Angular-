import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('form') signupForm : NgForm;
  
  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  onRegister(){
    this.authService.signup(this.signupForm.value);
  }
}
