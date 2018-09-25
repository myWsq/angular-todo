import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminComponent } from './super-admin.component';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from '../../service/user.service';

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
  declarations: [SuperAdminComponent]
})
export default class SuperAdminModule { }
