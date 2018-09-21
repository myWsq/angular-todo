import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const devPage = 'marked';

const routes: Routes = [
  {
    path: '',
    redirectTo: devPage,
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module'
  },
  {
    path: 'marked',
    loadChildren: './marked/marked.module'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
