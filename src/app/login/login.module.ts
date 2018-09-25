import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnackBarModule } from '../../components/snack-bar/snack-bar.module';
import { SnackBarService } from '../../components/snack-bar/snack-bar.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent],
  providers: [SnackBarService]
})
export default class LoginModule { }
