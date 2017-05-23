import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OneTimeComponent} from "./one-time.component";
import {OneTimeRoutingModule} from "./one-time.routing.module";

@NgModule({
  imports: [
    CommonModule,
    OneTimeRoutingModule,
    OneTimeComponent
  ],
  declarations: [OneTimeComponent],
})
export class OneTimeModule { }
