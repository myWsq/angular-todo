/**
 * httpclient拦截器 - 当请求调用成功,
 * 但由于某些原因被服务器拒绝,
 * MyResponse success字段为fail时调用
 */
import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppService } from '../app/app.service';
import { SnackBarService } from '../components/snack-bar/snack-bar.service';
import { MyResponse } from '.';

/** Pass untouched request through to the next request handler. */
@Injectable({
    providedIn: 'root'
})
export class TapErrorInterceptor implements HttpInterceptor {
    constructor(
        public snackBar: SnackBarService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(tap(e => {
            /** 可能有非response夹杂 */
           if (e instanceof HttpResponse) {
                const body = e.body as MyResponse;
                if (!body.success) {
                    this.snackBar.error(body.error);
                }
           }
        }));
    }
}
