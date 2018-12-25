import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminNestedRoutingModule } from './admin-nested-routing.module';
import { AdminNestedChildComponent } from './admin-nested-child/admin-nested-child.component';

@NgModule({
  declarations: [AdminNestedChildComponent],
  imports: [
    CommonModule,
    AdminNestedRoutingModule
  ]
})
export class AdminNestedModule { }
