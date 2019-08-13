import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUsersRoutingModule } from './admin-users-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersCreateUpdateComponent } from './components/users-create-update/users-create-update.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';


@NgModule({
  declarations: [UsersListComponent, UsersCreateUpdateComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    AdminUsersRoutingModule
  ]
})
export class AdminUsersModule { }
