import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProductsRoutingModule } from './admin-products-routing.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsCreateUpdateComponent } from './components/products-create-update/products-create-update.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


@NgModule({
  declarations: [ProductsListComponent, ProductsCreateUpdateComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    AdminProductsRoutingModule
  ]
})
export class AdminProductsModule { }
