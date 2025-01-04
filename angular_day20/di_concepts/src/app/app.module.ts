import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './Admin/Admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './Admin/UserList/UserList.component';
import { userService } from './Services/user.service';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { GrandChildComponent } from './grand-child.component';
import { DemocompComponent } from './democomp/democomp.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { testDirective } from './test-directive';
import {HttpClientModule} from '@angular/common/http';
import { RxjspracticeComponent } from './rxjspractice/rxjspractice.component';
import { RNDRxJSComponent } from './RNDRxJS/RNDRxJS.component';
import { SubscribenewComponent } from './subscribenew/subscribenew.component';
export const user_token = new InjectionToken<userService>('userServiceToken');

@NgModule({
  declarations: [						
    AppComponent,
      AdminComponent,
      UserListComponent,
      ParentComponent,
      ChildComponent,
      GrandChildComponent,
      DemocompComponent,
      ServiceDemoComponent,
      MyDirectiveDirective,
      testDirective,
      RxjspracticeComponent,
      RNDRxJSComponent,
      SubscribenewComponent
   ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule
    
  ],
  // providers: [{provide:userService,useClass:userService}],  //type
  // providers:[{provide:'user_service',useClass:userService}], //string and adding user_service as variable 
  providers:[{provide: user_token, useClass: userService}],
  // bootstrap: [SubscribenewComponent]
  bootstrap:[AppComponent]
})
export class AppModule { }
