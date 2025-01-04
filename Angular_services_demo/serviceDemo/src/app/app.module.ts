import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { ChildComponent } from './header/home/child/child.component';
import { subscribeService } from './Services/subscription.services';

@NgModule({
  declarations: [	
    AppComponent,
      HeaderComponent,
      HomeComponent,
      ChildComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [subscribeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
