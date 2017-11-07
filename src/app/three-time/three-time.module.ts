import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThreeTimeRoutingModule} from "./three-time.routing.module";
import {ThreeTimeComponent} from "./three-time.component";

@NgModule({
  imports: [
    CommonModule,
    ThreeTimeComponent,
    ThreeTimeRoutingModule
  ],
  declarations: [ThreeTimeComponent],
})
export class ThreeTimeModule { }
