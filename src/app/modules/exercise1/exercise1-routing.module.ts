import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise1Component } from './exercise1.component';

const routes: Routes = [{ path: '', component: Exercise1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Exercise1RoutingModule { }
