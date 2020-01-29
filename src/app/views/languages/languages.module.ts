import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesView } from './languages.view';
import { SharedModule } from '../../shared/shared.module';
import { LanguagesRoutingModule } from './languages.routing.module';

@NgModule({
  imports: [
    LanguagesRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    LanguagesView
  ],
  providers: [
  ]
})
export class LanguagesViewModule { }
