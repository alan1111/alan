import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import {ThreeTimeComponent} from "./three-time.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'three',
        component: ThreeTimeComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ThreeTimeRoutingModule { }
