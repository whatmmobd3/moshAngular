import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { InputFormatDirective } from './input-format.directive';
import { ContractFormComponent } from './contract-form/contract-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormatDirective,
    ContractFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
