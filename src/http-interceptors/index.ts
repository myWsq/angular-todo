/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CatchErrorInterceptor } from './catchError';
import { Provider } from '@angular/core';
import { TapErrorInterceptor } from './tapError';

/** Http请求返回的固定格式 */
export interface MyResponse<T = any> {
  success: boolean;
  data ?: T;
  error?: string;
}




/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders: Provider[] = [
  { provide: HTTP_INTERCEPTORS,
    useClass: CatchErrorInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TapErrorInterceptor,
    multi: true
  }
];
