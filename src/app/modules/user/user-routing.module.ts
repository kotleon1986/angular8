import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: "./dashboard/dashboard.module#DashboardModule"
  },
  { path: "cart", loadChildren: "./cart/cart.module#CartModule" },
  { path: "orders", loadChildren: "./orders/orders.module#OrdersModule" },
  {
    path: "wishlist",
    loadChildren: "./wishlist/wishlist.module#WishlistModule"
  },
  {
    path: "profile",
    loadChildren: "./profile/profile.module#ProfileModule"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
