import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { SalesComponent } from './Sales/Sales.component';
// import { ProductComponent } from './Product/Product.component';
import { LeadFormComponent } from './LeadForm/LeadForm.component';
import { HomeComponent } from './Home/Home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Home/Login/Login.component';
import { RegisterComponent } from './Home/Register/Register.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FruitModule } from './fruit/fruit.module';
import { ProductComponent } from '../app/fruit/home/home.component';
const myRoutes:Routes=[
  {path:"",component:HomeComponent},
  {path:"Home/Login",component:LoginComponent},
  {path:"app",component:AppComponent},
  {path:"Dashboard",component:DashboardComponent},
  {path:"Sales",component:SalesComponent},
  {path:"Products",component:ProductComponent},
  {path:"LeadForm",component:LeadFormComponent}
  // {path:"**",component:HomeComponent},

]

@NgModule({
  declarations: [					
    AppComponent,
      DashboardComponent,
      SalesComponent,
      
      LeadFormComponent,
      HomeComponent,
      LoginComponent,
      RegisterComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoutes),
    HighchartsChartModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,FruitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
