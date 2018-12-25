import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { DetailComponent } from './news/detail/detail.component';
import { RouteComponent } from './route/route.component';
import { RouteDetailComponent } from './route/route-detail/route-detail.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { AfterViewComponent } from './lifecycle/after-view/after-view.component';
import { AfterViewChildComponent } from './lifecycle/after-view/after-view-child/after-view-child.component';
import { AfterContentComponent } from './lifecycle/after-content/after-content.component';
import { AfterContentChildComponent } from './lifecycle/after-content/after-content-child/after-content-child.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { InteractionComponent } from './interaction/interaction.component';
import { InteractionChildComponent } from './interaction/interaction-child/interaction-child.component';
import { InteractionOtherChildComponent } from './interaction/interaction-other-child/interaction-other-child.component';
import { DirectiveComponent } from './directive/directive.component';
import { DemoComponent } from './demo/demo.component';
import { DemoChildComponent } from './demo/demo-child/demo-child.component';
import { PipesComponent } from './pipes/pipes.component';
import { NewsItemComponent } from './news/news-item/news-item.component';
import { ServiceComponent } from './service/service.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';
import { SingleFormControlComponent } from './forms/single-form-control/single-form-control.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FeaturesComponent } from './features/features.component';

import { ProductModule } from './product/product.module';
import { AdminModule } from './admin/admin.module';
import { FeaturesModule } from './features/features.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    DetailComponent,
    RouteComponent,
    RouteDetailComponent,
    LifecycleComponent,
    AfterViewComponent,
    AfterViewChildComponent,
    AfterContentComponent,
    AfterContentChildComponent,
    RegisterComponent,
    LoginComponent,
    InteractionComponent,
    InteractionChildComponent,
    InteractionOtherChildComponent,
    DirectiveComponent,
    DemoComponent,
    DemoChildComponent,
    PipesComponent,
    NewsItemComponent,
    ServiceComponent,
    FormsComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    SingleFormControlComponent,
    PageNotFoundComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProductModule,
    AdminModule,
    // FeaturesModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
