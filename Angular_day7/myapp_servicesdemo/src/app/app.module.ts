import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MycompComponent } from './mycomp/mycomp.component';
import { MyPipePipe } from './myPipe.pipe';

@NgModule({
  declarations: [		
    AppComponent,
      MycompComponent,
      MyPipePipe
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
