
/**
 * @file 全局公共服务
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserState, Roles } from '../store/user';
import { DO_NOT_TAP } from '../http-interceptors/flag';



@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  /** 获取当前登录用户信息 */
  me() {
    return this.http.get('/api/auth');
  }

  /** 用户认证 */
  auth(username) {
    const headers = new HttpHeaders();
    // headers = headers.set(DO_NOT_TAP, 'any');
    return this.http.post(
      'api/auth',
      {
        username
      },
      {
        headers
      }
    );
  }

  /** 获得当前用户登录后应该跳转到的Url */
  getRedirectUrl(user: UserState) {
    switch (user.roles[0]) {
      case Roles.CUSTOMER:
        return '/';
      case Roles.ADMIN:
        return '/admin';
      case Roles.SUPER_ADMIN:
        return '/super_admin';
      default:
        return '/';
    }
  }
}
