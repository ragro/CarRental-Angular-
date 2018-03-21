import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { FlashMessage } from 'angular-flash-message';

@Injectable()

export class userAuthService implements CanActivate {

    constructor(private router: Router,private flashmessage : FlashMessage) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('user') !== null) {
            if (JSON.parse(localStorage.getItem('user')).username !== 'admin') {
                return true;
            } else {
                this.flashmessage.danger("you are not a valid user");
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