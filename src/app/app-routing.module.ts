import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './news/detail/detail.component';
import { RouteComponent } from './route/route.component';
import { RouteDetailComponent } from './route/route-detail/route-detail.component';
import { AfterViewComponent } from './lifecycle/after-view/after-view.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { AfterContentComponent } from './lifecycle/after-content/after-content.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { InteractionComponent } from './interaction/interaction.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServiceComponent } from './service/service.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';
import { SingleFormControlComponent } from './forms/single-form-control/single-form-control.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { FeaturesComponent } from './features/features.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'news/:id',
    component: DetailComponent
  },
  {
    path: 'route',
    component: RouteComponent
  },
  {
    path: 'route/:id',
    component: RouteDetailComponent
  },
  {
    path: 'life-cycle',
    component: LifecycleComponent
  },
  {
    path: 'after-view',
    component: AfterViewComponent
  },
  {
    path: 'after-content',
    component: AfterContentComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'interaction',
    component: InteractionComponent
  },
  {
    path: 'directive',
    component: DirectiveComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  },
  {
    path: 'forms',
    component: FormsComponent,
    children: [
      {
        path: 'reactive',
        component: ReactiveFormComponent
      },
      {
        path: 'template-driven',
        component: TemplateDrivenFormComponent
      },
      {
        path: 'single-form',
        component: SingleFormControlComponent
      }
    ]
  },
  {
    path: 'lazy-load',
    loadChildren: './lazy-load/lazy-load.module#LazyLoadModule'
    // canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false, // <-- debugging purposes only
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
