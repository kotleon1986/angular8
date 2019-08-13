import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminCategoriesRoutingModule } from "./admin-categories-routing.module";
import { CategoriesListComponent } from "./components/categories-list/categories-list.component";
import { CategoriesCreateUpdateComponent } from "./components/categories-create-update/categories-create-update.component";

@NgModule({
  declarations: [CategoriesListComponent, CategoriesCreateUpdateComponent],
  imports: [CommonModule, AdminCategoriesRoutingModule]
})
export class AdminCategoriesModule {}
