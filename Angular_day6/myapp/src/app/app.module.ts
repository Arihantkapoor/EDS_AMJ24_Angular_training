import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { DemoDirectiveDirective } from './demo-directive.directive';
import { CustomPipeMathPipe } from './customPipeMath.pipe';
import { TitlePipePipe } from './TitlePipe.pipe';

@NgModule({
  declarations: [				
    AppComponent,
      MyDirectiveDirective,
      DemoDirectiveDirective,
      CustomPipeMathPipe,
      TitlePipePipe
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
