import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminComponent } from './super-admin.component';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from '../../service/user.service';
import { SignToComponent } from './sign-to/sign-to.component';

const routes: Routes = [
  {
    path: '',
    component: SuperAdminComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [UserService],
  declarations: [SuperAdminComponent, SignToComponent]
})
export default class SuperAdminModule { }
