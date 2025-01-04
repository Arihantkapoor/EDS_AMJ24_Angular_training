import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { UserComponent } from './User/User.component';
import { DetailsComponent } from './Details/Details.component';
import { ErrorComponent } from './error.component';
import { AuthService } from './AuthService.user';
import { LoginComponent } from './Login/Login.component';

const myRoute : Routes = [
    {path:'', component:HomeComponent},
    // {path: '', redirectTo: "Home", pathMatch: 'full'},
    {path: "Home", component: HomeComponent},
    {path: "Contact", component: ContactComponent},
    {path: "Login", component:LoginComponent},
    {path: "User", component: UserComponent, canActivate:[AuthService]},
    // child routes/Nested routes
    {path: "User", children: [{
        path: "detail/:id",
        component: DetailsComponent
    }]},
    // {path: "User/detail/:id", component: DetailsComponent},
    {path: "**", component: ErrorComponent} // ** for all components(default route)
  
  ]

  @NgModule(
    {
       imports: [
        RouterModule.forRoot(myRoute)
       ],
       exports: [RouterModule]
    }
  )
  export class RouteModule{

  }