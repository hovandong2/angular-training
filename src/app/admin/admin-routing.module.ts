import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from '../auth/auth.guard';
import { AdminNestedComponent } from './admin-nested/admin-nested.component';
import { AdminComponent } from './admin.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ProfileResolve } from './profile.resolver';

import { ConfirmDeactivateGuard } from './confirmDeactive.guard';

import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'profile',
        component: AdminProfileComponent,
        canDeactivate: [ConfirmDeactivateGuard],
        resolve: {
          profile: ProfileResolve
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
