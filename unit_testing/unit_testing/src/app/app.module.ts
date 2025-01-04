import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { StrongnessPipe } from './Pipes/strongness/strongness.pipe';
import { PostsComponent } from './components/posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import { PostService } from './services/posts/post.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@NgModule({
  declarations: [AppComponent, StrongnessPipe, PostsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule,
    HttpClientModule, HttpClientTestingModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
