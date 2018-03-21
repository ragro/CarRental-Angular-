import { Component, OnInit } from '@angular/core';
import { FlashMessage } from 'angular-flash-message';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isloggedin:boolean=false;

  constructor(private flashmessage: FlashMessage,
              private authService : AuthService) { }

  ngOnInit() {
    this.isloggedin=this.authService.isloggedin();
    this.authService.loginstatus.subscribe(
      (status) =>{this.isloggedin=status}
    )
  }

  onlogout(){
    // this.flashmessage.success("logout successfully");
    this.authService.onlogout();
  }

}
