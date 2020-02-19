import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lesson1RoutingModule } from './lesson1-routing.module';
import { Lesson1Component } from './lesson1.component';
import { AgrarComponent } from './components/agrar/agrar.component';


@NgModule({
  declarations: [Lesson1Component, AgrarComponent],
  imports: [
    CommonModule,
    Lesson1RoutingModule
  ]
})
export class Lesson1Module { }
