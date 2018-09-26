/**
 * @file httpclient拦截器 - 当请求调用失败, 返回非200的错误码时调用
 */
import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppService } from '../app/app.service';
import { SnackBarService } from '../components/snack-bar/snack-bar.service';

/** Pass untouched request through to the next request handler. */
@Injectable({
    providedIn: 'root'
})
export class CatchErrorInterceptor implements HttpInterceptor {
    constructor(
        public router: Router,
        public app: AppService,
        public snackBar: SnackBarService
    ) {}

    handleError(error: HttpErrorResponse) {
        this.router.navigate(['error', error.status]);
        return throwError(error);
    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(catchError(this.handleError.bind(this)));
    }
}
