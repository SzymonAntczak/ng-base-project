import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrenciesView } from './currencies.view';
import { CurrenciesRoutingModule } from './currencies.routing.module';

@NgModule({
  imports: [
    CommonModule,
    CurrenciesRoutingModule
  ],
  declarations: [
    CurrenciesView,
  ],
})
export class CurrenciesViewModule { }
