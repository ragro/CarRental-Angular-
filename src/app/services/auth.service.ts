import { Injectable } from "@angular/core";
import { Http,
         Response,
         Headers } from '@angular/http';
import 'rxjs/Rx';
import { Subject } from "rxjs/Rx";
import { Observable } from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";
import { Router } from "@angular/router";
import { FlashMessage} from "angular-flash-message";




 
@Injectable()

export class AuthService{

    user: string;
    isadmin: boolean;
    loginstatus = new Subject<boolean>();

    constructor(private http:Http,
                private router : Router,
                private flashmessage : FlashMessage){}

    signIn(email:string, password:string){
        let data = {
            'username' : email,
            'password' : password
        };

        let header = new Headers();
        header.append('Content-Type','application/json');
      
        this.http.post("http://localhost:8081/user/login",JSON.stringify(data),{headers:header})
        .subscribe(
            (response:Response) => {
                if(response.json().success){

                    localStorage.setItem('id_token', response.json().token);
                    localStorage.setItem('user', JSON.stringify(response.json().user));
                    this.flashmessage.success("loggedin sucessfully", 
                        { delay: 2500, generalClass: 'alert alert-success' });
                    
                        this.loginstatus.next(true);
                    
                    if (JSON.parse(localStorage.getItem('user')).username == 'admin') {
                        this.isadmin=true;
                        this.router.navigate(['/admin']);
                    }
                    else {
                        this.router.navigate(['/user'])
                    }
                    this.router.navigate(["/user"]);

                }else{
                    this.flashmessage.success("Invalid Credentials", 
                        { delay: 2500, generalClass: 'alert alert-danger' });
                    this.router.navigate(["/signin"]);
                }
            }
        )
        
    }

    signup(user:User){
       
        let userData = {
            'username'  : user.username,
            'fname'     : user.fname,
            'lname'     : user.lname,
            'phone'     : user.phone,
            'email'     : user.email,
            'age'       : user.age,
            'city'      : user.city,
            'license'   : user.license,
            'usertype'  : "user",
            'verified'  : false,
            'blocked'   :  false ,
            'password'  : user.password
        }

        let header = new Headers();
            header.append('Content-Type','application/json');

            this.http.post("http://localhost:8081/user/register",userData,{headers:header})
            .subscribe((response : Response)=>{
                if(response.json().success)
                {
                    localStorage.setItem('id_token', response.json().token);
                    localStorage.setItem('user', JSON.stringify(response.json().user));
                    this.flashmessage.success("Registered Successfully", 
                        { delay: 2500, generalClass: 'alert alert-success' });
                    
                        this.loginstatus.next(true);
                    
                    this.router.navigate(["/user"]);

                }else{
                    this.flashmessage.success("Something went wrong", 
                    { delay: 2500, generalClass: 'alert alert-danger' });
             
                    this.router.navigate(["/signup"]);
                }                            
          });
    }

    onlogout() {
        localStorage.clear();
        this.isadmin=false;
        this.flashmessage.success("Logged you out Successfully", 
                        { delay: 2500, generalClass: 'alert alert-success' });
        this.loginstatus.next(false);
        this.router.navigate(['/signin']);
    }
}


