import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";

import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AdminLayoutComponent } from "./components/admin-layout/admin-layout.component";
import { UserLayoutComponent } from "./components/user-layout/user-layout.component";
import { AuthLayoutComponent } from "./components/auth-layout/auth-layout.component";
import { SharedModule } from "../shared/shared.module";

const Components = [
  HeaderComponent,
  SidebarComponent,
  FooterComponent,
  AdminLayoutComponent,
  UserLayoutComponent,
  AuthLayoutComponent
];

@NgModule({
  declarations: Components,
  imports: [CommonModule, FlexLayoutModule, SharedModule, RouterModule],
  exports: Components
})
export class LayoutModule {}
