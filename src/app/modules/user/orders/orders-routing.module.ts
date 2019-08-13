import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrdersListComponent } from "./components/orders-list/orders-list.component";
import { SingleOrderComponent } from "./components/single-order/single-order.component";

const routes: Routes = [
  { path: "", component: OrdersListComponent },
  { path: "/:orderId", component: SingleOrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {}
