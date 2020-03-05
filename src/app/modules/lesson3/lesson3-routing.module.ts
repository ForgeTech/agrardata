import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lesson3Component } from './lesson3.component';

const routes: Routes = [{ path: '', component: Lesson3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lesson3RoutingModule { }
