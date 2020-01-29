import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguagesView } from './languages.view';

const routes: Routes = [
  {
    path: '',
    component: LanguagesView
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
export class LanguagesRoutingModule { }
