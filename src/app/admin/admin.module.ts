import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNestedComponent } from './admin-nested/admin-nested.component';

import { AdminNestedModule } from './admin-nested/admin-nested.module';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminDashboardComponent, AdminNestedComponent, AdminProfileComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminNestedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
