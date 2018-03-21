import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin/admin.component";
import { ShowcarComponent } from "./admin/showcar/showcar.component";
import { AddcarComponent } from "./admin/addcar/addcar.component";
import { ShowuserComponent } from "./admin/showuser/showuser.component";
import { VerifyuserComponent } from "./admin/verifyuser/verifyuser.component";
import { CarComponent } from "./admin/showcar/car/car.component";
import { editCarComponent } from "./admin/editCar/editcar.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { adminAuthService } from "./services/admin.auth.service";
import { userAuthService } from "./services/user.auth.service";
import { BookcarComponent } from "./user/bookcar/bookcar.component";
import { UserdashboardComponent } from "./user/userdashboard/userdashboard.component";

const appRoutes: Routes =[
    { path : '', component : HomeComponent },
    { path : 'signin', component: SigninComponent},
    { path : 'signup', component: SignupComponent},
    { path: 'user', component : UserComponent, children:[
        { path: '', component: UserdashboardComponent},
        { path: 'car/:car_id', component:BookcarComponent}
    ]},
    { path: 'admin', component:AdminComponent,canActivate:[adminAuthService] ,children:[
       { path: '', redirectTo: 'showcar', pathMatch:'full'},
       { path: 'showcar', component: ShowcarComponent},
       { path: 'showcar/:id', component: editCarComponent },
       { path: 'addcar', component: AddcarComponent},
       { path: 'showuser', component: ShowuserComponent},
       { path: 'verify', component: VerifyuserComponent}
    ]}
]

@NgModule({
imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],
exports:[RouterModule]
})

export class AppRoutingModule{

}