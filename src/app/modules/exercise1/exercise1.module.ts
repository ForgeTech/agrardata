import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercise1RoutingModule } from './exercise1-routing.module';
import { Exercise1Component } from './exercise1.component';


@NgModule({
  declarations: [Exercise1Component],
  imports: [
    CommonModule,
    Exercise1RoutingModule
  ]
})
export class Exercise1Module { }
