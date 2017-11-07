import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TwoTimeRoutingModule} from "./two-time.routing.module";
import {TwoTimeComponent} from "./two-time.component";

@NgModule({
  imports: [
    CommonModule,
    TwoTimeRoutingModule,
    TwoTimeComponent
  ],
  declarations: [TwoTimeComponent],
})
export class TwoTimeModule { }
