import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';


const routes: Routes = [
  {
    path: 'exercise2/stefan',
    loadChildren: () => import('./modules/exercise2/stefan/stefan.module').then(m => m.StefanModule)
  },
  {
    path: 'exercise1',
    loadChildren: () => import('./modules/exercise1/exercise1.module').then(m => m.Exercise1Module)
  },
  {
    path: 'exercise2/florian',
    loadChildren: () => import('./modules/exercise2/florian/florian.module').then(m => m.FlorianModule)
  },
  {
    path: 'exercise2/josef',
    loadChildren: () => import('./modules/exercise2/josef/josef.module').then(m => m.JosefModule)
  },
  {
    path: 'lesson1',
    loadChildren: () => import('./modules/lesson1/lesson1.module').then(m => m.Lesson1Module)
  },
  {
    path: 'lesson2',
    loadChildren: () => import('./modules/lesson2/lesson2.module').then(m => m.Lesson2Module)
  },
  {
    path: '**',
    redirectTo: 'exercise2'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
