import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddWordComponent } from './pages/add-word/add-word.component';
import { AllWordComponent,MyFilterPipe } from './pages/all-word/all-word.component';
import { QuizComponent } from './pages/quiz/quiz.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'add-word',
    component:AddWordComponent
    
  },
  {
    path: 'all-word',
    component:AllWordComponent
    
  },
  {
    path: 'quiz',
    component:QuizComponent
    
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
