import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule, Routes} from '@angular/router';
import { SwiperModule } from './swiper/swiper.module';
import { AnimationComponent } from './animation/animation.component';
import { SvgComponent } from './svg/svg.component';
import { MatButtonModule } from '@angular/material';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    SwiperModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HomeComponent, AnimationComponent, SvgComponent]
})
export default class HomeModule { }
