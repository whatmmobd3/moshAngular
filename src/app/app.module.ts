import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputFormatDirective } from './input-format.directive';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component';

import { PostService } from './services/post.service'


@NgModule({
  declarations: [
    AppComponent,
    InputFormatDirective,
    ContractFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostsComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule { }
