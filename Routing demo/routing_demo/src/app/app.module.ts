import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './User/User.component';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { ErrorComponent } from './error.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { DetailsComponent } from './Details/Details.component';
import { RouteModule } from './routing.module';
import { HeaderComponent } from './header/header.component';
import { CourseComponent } from './course/course.component';
import { SkillsComponent } from './skills/skills.component';
import { authInterceptor } from './AuthInterceptor.service';
import { LoggingInterceptor } from './logging.service';
import { AuthService } from './AuthService.user';
import { LoginComponent } from './Login/Login.component';



@NgModule({
  declarations: [						
    AppComponent,
    UserComponent, HomeComponent, ContactComponent, ErrorComponent,
      DetailsComponent,
      HeaderComponent,
      CourseComponent,
      SkillsComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule,HttpClientModule,RouteModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:authInterceptor,multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
