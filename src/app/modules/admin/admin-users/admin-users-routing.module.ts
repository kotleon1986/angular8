import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { UsersCreateUpdateComponent } from "./components/users-create-update/users-create-update.component";

const routes: Routes = [
  { path: "", component: UsersListComponent },
  { path: "create", component: UsersCreateUpdateComponent },
  { path: ":id", component: UserDetailsComponent },
  { path: "edit/:id", component: UsersCreateUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminUsersRoutingModule {}
