import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

import { LazyLoadRoutingModule } from './lazy-load-routing.module';
import { LazyLoadComponent } from './lazy-load.component';

@NgModule({
  declarations: [LazyLoadComponent],
  imports: [
    CommonModule,
    LazyLoadRoutingModule,
    SharedModule
  ]
})
export class LazyLoadModule { }
