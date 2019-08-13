import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "dashboard" },
  {
    path: "dashboard",
    loadChildren:
      "./admin-dashboard/admin-dashboard.module#AdminDashboardModule"
  },
  {
    path: "categories",
    loadChildren:
      "./admin-categories/admin-categories.module#AdminCategoriesModule"
  },
  {
    path: "products",
    loadChildren: "./admin-products/admin-products.module#AdminProductsModule"
  },
  {
    path: "orders",
    loadChildren: "./admin-orders/admin-orders.module#AdminOrdersModule"
  },
  {
    path: "users",
    loadChildren: "./admin-users/admin-users.module#AdminUsersModule"
  },
  {
    path: "**",
    redirectTo: "/not-found"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
