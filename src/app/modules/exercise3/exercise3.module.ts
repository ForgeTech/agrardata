import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercise3RoutingModule } from './exercise3-routing.module';
import { FlorianComponent } from './components/florian/florian.component';


@NgModule({
  declarations: [FlorianComponent],
  imports: [
    CommonModule,
    Exercise3RoutingModule
  ]
})
export class Exercise3Module { }
