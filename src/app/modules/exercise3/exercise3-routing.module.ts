import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlorianComponent } from './components/florian/florian.component';

const routes: Routes = [{ path: '', component: FlorianComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Exercise3RoutingModule { }
