import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesComponent } from './Pipes/Pipes.component';
import { TitlePipe } from './title.pipe';
import { MycompComponent } from './mycomp/mycomp.component';
import { FormsModule } from '@angular/forms';
import { ChildcompComponent } from './childcomp/childcomp.component';
import { FormscompComponent } from './formscomp/formscomp.component';

@NgModule({
  declarations: [		
    AppComponent,
      PipesComponent,
      TitlePipe,
      MycompComponent,
      ChildcompComponent,
      FormscompComponent
   ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [FormscompComponent]
})
export class AppModule { }
