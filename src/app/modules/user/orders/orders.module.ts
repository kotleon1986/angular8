import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OrdersRoutingModule } from "./orders-routing.module";
import { OrdersListComponent } from "./components/orders-list/orders-list.component";
import { SingleOrderComponent } from "./components/single-order/single-order.component";

@NgModule({
  declarations: [OrdersListComponent, SingleOrderComponent],
  imports: [CommonModule, OrdersRoutingModule]
})
export class OrdersModule {}
