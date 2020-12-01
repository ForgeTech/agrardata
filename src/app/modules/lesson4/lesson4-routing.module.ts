import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lesson4Component } from './lesson4/lesson4.component';

const routes: Routes = [{ path: '', component: Lesson4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lesson4RoutingModule { }
