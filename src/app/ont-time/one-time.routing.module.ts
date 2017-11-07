import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import {OneTimeComponent} from "./one-time.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'one',
        component: OneTimeComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class OneTimeRoutingModule { }
