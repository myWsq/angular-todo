import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkedComponent } from './marked.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MarkedComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MarkedComponent]
})
export default class MarkedModule { }
