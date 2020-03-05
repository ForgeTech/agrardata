import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lesson3RoutingModule } from './lesson3-routing.module';
import { Lesson3Component } from './lesson3.component';


@NgModule({
  declarations: [Lesson3Component],
  imports: [
    CommonModule,
    Lesson3RoutingModule
  ]
})
export class Lesson3Module { }
