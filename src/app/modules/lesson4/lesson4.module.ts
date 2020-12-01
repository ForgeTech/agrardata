import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lesson4Component } from './lesson4/lesson4.component';
import { Lesson4RoutingModule } from './lesson4-routing.module';



@NgModule({
  declarations: [Lesson4Component],
  imports: [
    CommonModule,
    Lesson4RoutingModule
  ]
})
export class Lesson4Module { }
