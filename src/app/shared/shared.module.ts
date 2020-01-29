import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    InlineSVGModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent,
    CommonModule,
    RouterModule,
    InlineSVGModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
