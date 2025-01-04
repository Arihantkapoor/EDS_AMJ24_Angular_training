import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MycustomeDirectiveDirective } from './mycustome-directive.directive';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDirDirective } from './employee-dir.directive';
import { MyDirectiveDirective } from './my-directive.directive';

@NgModule({
  declarations: [	
    AppComponent,
    MycustomeDirectiveDirective,
    EmployeeComponent,
    EmployeeDirDirective,
      MyDirectiveDirective
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
