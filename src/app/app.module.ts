import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {OneTimeModule} from "./ont-time/one-time.module";
import {ThreeTimeModule} from "./three-time/three-time.module";
import {TwoTimeModule} from "./two-time/two-time.module";

@NgModule({
  imports:      [
    BrowserModule,
    OneTimeModule,
    TwoTimeModule,
    ThreeTimeModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
