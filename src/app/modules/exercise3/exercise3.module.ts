import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise3RoutingModule } from './exercise3-routing.module';
import { FlorianComponent } from './components/florian/florian.component';
import { Exercise3Component } from './components/exercise3/exercise3.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    FlorianComponent,
    Exercise3Component,
  ],
  imports: [
    CommonModule,
    Exercise3RoutingModule,
    MatExpansionModule,
    MatIconModule
  ]
})
export class Exercise3Module { }
