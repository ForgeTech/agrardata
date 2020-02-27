import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lesson2Component } from './components/lesson2/lesson2.component';
import { Test2Component } from './components/test2/test2.component';
import { Test1Component } from './components/test1/test1.component';

const routes: Routes = [
  { path: '', component: Lesson2Component },
  { path: 'test1', component: Test1Component },
  { path: 'test2', component: Test2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lesson2RoutingModule { }
