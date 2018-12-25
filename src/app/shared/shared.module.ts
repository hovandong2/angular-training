import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighLightDirective } from './directives/high-light.directive';
import { UnlessDirective } from './directives/unless.directive';
import { BtnLoadDirective } from './directives/btn-load.directive';
import { MathPipe } from './pipes/math.pipe';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HighLightDirective,
    UnlessDirective,
    BtnLoadDirective,
    MathPipe,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HighLightDirective,
    UnlessDirective,
    BtnLoadDirective,
    MathPipe,
    HeaderComponent
  ]
})
export class SharedModule { }
