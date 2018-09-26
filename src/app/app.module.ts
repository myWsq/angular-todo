import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../store/user';
import { AppService } from './app.service';
import { SnackBarModule } from '../components/snack-bar/snack-bar.module';
import { ContainerModule } from '../components/container/container.module';
import { MatIconModule } from '@angular/material';
import { httpInterceptorProviders } from '../http-interceptors';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { MarkedPipe } from '../pipe/marked.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserInfoComponent,
    ErrorComponent,
    IndexComponent,
    MarkedPipe
  ],
  imports: [
    BrowserModule,
    SnackBarModule,
    AppRoutingModule,
    HttpClientModule,
    ContainerModule,
    MatIconModule,
    StoreModule.forRoot({
      user: userReducer
    })
  ],
  providers: [
    AppService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
