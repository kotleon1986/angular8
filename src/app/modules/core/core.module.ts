import { NgModule } from "@angular/core";
import { CoreRoutingModule } from "./core-routing.module";
import { LayoutModule } from "../layout/layout.module";

@NgModule({
  imports: [CoreRoutingModule, LayoutModule]
})
export class CoreModule {}
