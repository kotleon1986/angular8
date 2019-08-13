import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminLayoutComponent } from "../layout/components/admin-layout/admin-layout.component";
import { UserLayoutComponent } from "../layout/components/user-layout/user-layout.component";
import { AuthLayoutComponent } from "../layout/components/auth-layout/auth-layout.component";
import { RedirectIfAuthGuard } from "src/app/guards/redirect-if-auth/redirect-if-auth.guard";
import { AuthGuard } from "src/app/guards/auth/auth.guard";
import Roles from "src/app/constants/roles";

const routes: Routes = [
  {
    path: "auth",
    canLoad: [RedirectIfAuthGuard],
    component: AuthLayoutComponent,
    loadChildren: "./../auth/auth.module#AuthModule"
  },
  {
    path: "admin",
    canLoad: [AuthGuard],
    data: { roles: [Roles.ADMIN] },
    component: AdminLayoutComponent,
    loadChildren: "./../admin/admin.module#AdminModule"
  },
  {
    path: "",
    component: UserLayoutComponent,
    loadChildren: "./../main/main.module#MainModule"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
