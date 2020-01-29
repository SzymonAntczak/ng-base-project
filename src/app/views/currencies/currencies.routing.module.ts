import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrenciesView } from './currencies.view';

const routes: Routes = [
  {
    path: '',
    component: CurrenciesView
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CurrenciesRoutingModule { }
