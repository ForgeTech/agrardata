import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Exercise3Component } from './exercise3.component';

const routes: Routes = [{ path: '', component: Exercise3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Exercise3RoutingModule { }
