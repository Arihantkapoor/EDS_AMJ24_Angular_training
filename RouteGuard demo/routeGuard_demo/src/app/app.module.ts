import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './Contact/Contact.component'
import { HomeComponent } from './Home/Home.component';
import { ProductComponent } from './Product/Product.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './authguard.service';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { routeGuard } from './auth.guard';
import { DetailComponent } from './Product/detail/detail.component';
 const myroute:Routes=[
  {path:"home",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"product", component: ProductComponent},
  {path: "product", children:[
    {path: "detail/:id", component: DetailComponent}
  ], canActivateChild: [routeGuard]},
  // {path:"product",component:ProductComponent, canActivateChild:[AuthguardService],children:[{path:"detail/:id",component:DetailComponent}]},
  {path:"login",component:LoginComponent, canDeactivate: [(comp:LoginComponent)=>{return comp.canExit()}]},


 ]
@NgModule({
  declarations: [				
    AppComponent,
      ContactComponent,
      HomeComponent,
      ProductComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule,RouterModule.forRoot(myroute),FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
