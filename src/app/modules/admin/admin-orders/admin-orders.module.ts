import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminOrdersRoutingModule } from './admin-orders-routing.module';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';


@NgModule({
  declarations: [OrdersListComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    AdminOrdersRoutingModule
  ]
})
export class AdminOrdersModule { }
