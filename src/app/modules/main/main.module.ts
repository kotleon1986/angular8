import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule],
  exports: [HomeComponent, PageNotFoundComponent]
})
export class MainModule {}
