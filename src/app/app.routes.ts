import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';

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
  },
  {
    path: 'login',
    loadChildren: './login/login.module'
  },
  {
    path: 'super_admin',
    loadChildren: './super-admin/super-admin.module'
  },
  {
    path: 'error/:status',
    component: ErrorComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
