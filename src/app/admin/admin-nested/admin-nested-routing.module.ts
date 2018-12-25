import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminNestedChildComponent } from './admin-nested-child/admin-nested-child.component';
import { AdminNestedComponent } from './admin-nested.component';

const routes: Routes = [
  {
    path: 'admin/admin-nested',
    component: AdminNestedComponent,
    children: [
      {
        path: 'child',
        component: AdminNestedChildComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminNestedRoutingModule { }
