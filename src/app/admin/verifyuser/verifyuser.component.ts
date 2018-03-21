import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { Http, Response } from '@angular/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-verifyuser',
  templateUrl: './verifyuser.component.html',
  styleUrls: ['./verifyuser.component.css']
})
export class VerifyuserComponent implements OnInit {

  users: User[] = [];

  constructor(public http:Http,
              private authService : AuthService) { }

  ngOnInit() {
    this.verifyingUser().subscribe(
          
      (foundUsers) => {
              this.users.push(...foundUsers);        
      },
      (err) => {
          console.log("something went wrong");
      }
    ) 
  }

  verifyingUser(){
    return this.http.get("http://localhost:8081/admin/showUsers").map(
      (response: Response) => {
          var data = response.json();
          return data;
      }
    );
  }

  onVerify(userId){
      this.authService.verifyUser(userId);
  }

}
