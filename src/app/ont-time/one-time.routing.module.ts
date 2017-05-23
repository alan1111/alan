/**
 * Created by alan on 17-5-23.
 */
import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
// import { DashboardComponent } from '../dashboard/dashboard.component';
// import { CustomerResolve } from "../shared/customer/customer-resolve.service";
// import { LastOrderResolve } from './../shared/order/last-order-resolve.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'dashboard',
        // component: DashboardComponent,
        resolve: {
          // order: LastOrderResolve
        }
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
