import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AddcarComponent } from './admin/addcar/addcar.component';
import { ShowcarComponent } from './admin/showcar/showcar.component';
import { ShowuserComponent } from './admin/showuser/showuser.component';
import { VerifyuserComponent } from './admin/verifyuser/verifyuser.component';
import { CarService } from './services/car.services';
import { CarComponent } from './admin/showcar/car/car.component';
import { editCarComponent } from './admin/editCar/editcar.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './services/auth.service';


import { FlashMessageModule } from 'angular-flash-message';
import { userAuthService } from './services/user.auth.service';
import { adminAuthService } from './services/admin.auth.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    editCarComponent,
    HomeComponent,
    HeaderComponent,
    AdminComponent,
    AddcarComponent,
    CarComponent,
    ShowcarComponent,
    ShowuserComponent,
    VerifyuserComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    FlashMessageModule
    
   ],
  providers: [CarService, AuthService, userAuthService, adminAuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
