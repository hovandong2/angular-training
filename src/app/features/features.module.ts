import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeatureChildComponent } from './feature-child/feature-child.component';
// import { FeaturesComponent  } from './features.component';

@NgModule({
  declarations: [FeatureChildComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
