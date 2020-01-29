import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { BaseLayout } from './base.layout';
import { SharedModule } from '../../../shared/shared.module';
import { MainFooterComponent } from './main-footer/main-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    BaseLayout,
    MainNavbarComponent,
    MainFooterComponent
  ],
  exports: [
    BaseLayout,
    MainNavbarComponent,
    MainFooterComponent
  ]
})
export class BaseModule { }
