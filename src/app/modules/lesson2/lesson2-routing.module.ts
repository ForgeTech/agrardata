import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lesson2Component } from './components/lesson2/lesson2.component';

const routes: Routes = [{ path: '', component: Lesson2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lesson2RoutingModule { }
