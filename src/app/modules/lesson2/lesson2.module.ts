import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { Lesson2Component } from './components/lesson2/lesson2.component';
import { Lesson2RoutingModule } from './lesson2-routing.module';

@NgModule({
  declarations: [
    Test1Component,
    Test2Component,
    Lesson2Component
  ],
  imports: [
    CommonModule,
    Lesson2RoutingModule,
  ]
})
export class Lesson2Module { }
