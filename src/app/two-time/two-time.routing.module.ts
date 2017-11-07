import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import {TwoTimeComponent} from "./two-time.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'two',
        component: TwoTimeComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TwoTimeRoutingModule { }
