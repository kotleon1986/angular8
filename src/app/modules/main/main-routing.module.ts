import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AuthGuard } from "src/app/guards/auth/auth.guard";
import { UserRoles } from 'src/app/constants/roles';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "not-found",
    component: PageNotFoundComponent
  },
  {
    path: "categories",
    loadChildren: "./categories/categories.module#CategoriesModule"
  },
  {
    path: "dashboard",
    canActivate: [AuthGuard],
    data: UserRoles,
    loadChildren: "./dashboard/dashboard.module#DashboardModule"
  },
  {
    path: "cart",
    canActivate: [AuthGuard],
    data: UserRoles,
    loadChildren: "./cart/cart.module#CartModule" },
  {
    path: "orders",
    canActivate: [AuthGuard],
    data: UserRoles,
    loadChildren: "./orders/orders.module#OrdersModule"
  },
  {
    path: "wishlist",
    canActivate: [AuthGuard],
    data: UserRoles,
    loadChildren: "./wishlist/wishlist.module#WishlistModule"
  },
  {
    path: "profile",
    canActivate: [AuthGuard],
    data: UserRoles,
    loadChildren: "./profile/profile.module#ProfileModule"
  },
  {
    path: ":slug",
    loadChildren: "./products/products.module#ProductsModule"
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
