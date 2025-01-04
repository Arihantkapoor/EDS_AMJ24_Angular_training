import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MypipePipe } from './mypipe.pipe';
import { MycompComponent } from './mycomp/mycomp.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { ParentcompComponent } from './parentcomp/parentcomp.component';
import { ChildcompComponent } from './childcomp/childcomp.component';


@NgModule({
  declarations: [			
    AppComponent,
    MypipePipe,
    MycompComponent,
      MyDirectiveDirective,
      ParentcompComponent,
      ChildcompComponent,
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ParentcompComponent]
  // bootstrap: [AppComponent]
})
export class AppModule { }
