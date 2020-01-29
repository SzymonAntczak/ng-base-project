import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayout, BaseModule } from './views/layout/base';

const routes: Routes = [
  { path: '', component: BaseLayout,
    children: [
      { path: '', loadChildren: './views/home/home.module#HomeViewModule' },
      { path: 'languages', loadChildren: './views/languages/languages.module#LanguagesViewModule' },
      { path: 'currencies', loadChildren: './views/currencies/currencies.module#CurrenciesViewModule' }
    ]
  },
];

export const RoutableLayoutsModule = [
  BaseModule
];

@NgModule({
  imports: [
    RoutableLayoutsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
