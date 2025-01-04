import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentcompComponent } from './parentcomp/parentcomp.component';
import { ChildcompComponent } from './childcomp/childcomp.component';
import { Childcomp2Component } from './childcomp2/childcomp2.component';
import { Childcomp3Component } from './childcomp3/childcomp3.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';

@NgModule({
  declarations: [				
    AppComponent,
    ParentcompComponent,
    ChildcompComponent,
      Childcomp2Component,
      Childcomp3Component,
      Parent1Component,
      Child1Component
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [Parent1Component]
})
export class AppModule { }
