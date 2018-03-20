import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { FlashMessage } from 'angular-flash-message';
import { AuthService } from './auth.service';

@Injectable()

export class adminAuthService implements CanActivate {

    constructor(private router: Router,
                private flashmessage:FlashMessage,
                private authService : AuthService) { }


    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('user') !== null) {
            if (JSON.parse(localStorage.getItem('user')).usertype == 'admin') {
                return true;
            } else {
                this.flashmessage.danger("you are not an admin");
                this.router.navigate(['/signin']);
                return false;
            }
        } else {
            this.flashmessage.danger("you have to login first")
            this.router.navigate(['/signin']);
            return false;
        }

    }
}