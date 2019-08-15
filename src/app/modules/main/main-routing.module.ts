import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AuthGuard } from "src/app/guards/auth/auth.guard";
import Roles from "src/app/constants/roles";

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
    path: ":slug",
    loadChildren: "./products/products.module#ProductsModule"
  },
  {
    path: "",
    canLoad: [AuthGuard],
    data: { roles: [Roles.USER] },
    loadChildren: "./../user/user.module#UserModule"
  },
  // {
  //   path: ":slug",
  //   loadChildren: "./products/products.module#ProductsModule"
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
