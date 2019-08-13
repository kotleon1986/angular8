import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { SingleProductComponent } from "./components/single-product/single-product.component";

const routes: Routes = [
  { path: "", component: ProductsListComponent },
  { path: ":productSlug", component: SingleProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
