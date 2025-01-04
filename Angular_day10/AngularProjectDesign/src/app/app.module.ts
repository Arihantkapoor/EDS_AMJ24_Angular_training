import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Home/Register.component';
import { RegisterReactiveComponent } from './RegisterReactive/RegisterReactive.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import {HttpClientModule} from '@angular/common/http';
import { CrossfieldValidationComponent } from './crossfieldValidation/crossfieldValidation.component';

@NgModule({
  declarations: [				
    AppComponent,RegisterComponent,
      RegisterReactiveComponent,
      NewcompComponent,
      CrossfieldValidationComponent
   ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
