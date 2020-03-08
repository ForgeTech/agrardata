import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercise3RoutingModule } from './exercise3-routing.module';
import { Exercise3Component } from './exercise3.component';


@NgModule({
  declarations: [Exercise3Component],
  imports: [
    CommonModule,
    Exercise3RoutingModule
  ]
})
export class Exercise3Module { }
