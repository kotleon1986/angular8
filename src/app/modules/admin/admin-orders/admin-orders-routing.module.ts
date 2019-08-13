import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrdersListComponent } from "./components/orders-list/orders-list.component";
import { OrderDetailsComponent } from "./components/order-details/order-details.component";

const routes: Routes = [
  { path: "", component: OrdersListComponent },
  { path: ":id", component: OrderDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminOrdersRoutingModule {}
