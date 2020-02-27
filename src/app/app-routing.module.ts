import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';


const routes: Routes = [{
    path: 'exercise1',
    loadChildren: () => import('./modules/exercise1/exercise1.module').then(m => m.Exercise1Module)
  },
  {
    path: 'lesson1',
    loadChildren: () => import('./modules/lesson1/lesson1.module').then(m => m.Lesson1Module)
  },
  {
    path: '**',
    redirectTo: 'exercise1'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
