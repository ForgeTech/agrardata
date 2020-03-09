import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlorianComponent } from './components/florian/florian.component';
import { Exercise3Component } from './components/exercise3/exercise3.component';

const routes: Routes = [
  { path: '', component: Exercise3Component },
  { path: 'florian', component: FlorianComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Exercise3RoutingModule { }
