import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lesson1Component } from './lesson1.component';

const routes: Routes = [{ path: '', component: Lesson1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lesson1RoutingModule { }
