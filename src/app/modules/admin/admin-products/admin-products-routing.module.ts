import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { ProductsCreateUpdateComponent } from "./components/products-create-update/products-create-update.component";

const routes: Routes = [
  { path: "", component: ProductsListComponent },
  { path: "create", component: ProductsCreateUpdateComponent },
  { path: ":id", component: ProductDetailsComponent },
  { path: "edit/:id", component: ProductsCreateUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminProductsRoutingModule {}
