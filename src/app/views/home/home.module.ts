import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeView } from './home.view';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home.routing.module';
import { ApiExchangeRateService } from 'src/app/core/api/api-exchange-rate';

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeView
  ],
  providers: [
    ApiExchangeRateService
  ]
})
export class HomeViewModule { }
