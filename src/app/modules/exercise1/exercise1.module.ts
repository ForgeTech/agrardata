import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercise1RoutingModule } from './exercise1-routing.module';
import { Exercise1Component } from './exercise1.component';
import { FlorianComponent } from './florian/florian.component';
import { AppJosefComponent } from './app-josef/app-josef.component';
import { AppStefanComponent } from './app-stefan/app-stefan.component';


@NgModule({
  declarations: [Exercise1Component, AppJosefComponent, FlorianComponent, AppStefanComponent],
  imports: [
    CommonModule,
    Exercise1RoutingModule
  ]
})
export class Exercise1Module {

}
