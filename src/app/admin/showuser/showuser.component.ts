import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {

    users : User[] = [];

  constructor(public http:Http) { }

  ngOnInit() {
      this.showUsers().subscribe(
          
        (foundUsers) => {
                this.users.push(...foundUsers);        
                console.log(this.users.length);
        },
        (err) => {
            console.log("something went wrong");
        }
      ) 
  }

  showUsers(){
    return this.http.get("http://localhost:8081/admin/showUsers").map(
            (response: Response) => {
                // this.cars.push(...response.json());
                var data = response.json();
                console.log(data);
                return data;
            }
        )

  }

}
