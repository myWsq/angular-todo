
/**
 * @file 全局公共服务
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserState, Roles } from '../store/user';

/** Http请求返回的固定格式 */
export interface Response {
  success: boolean;
  data ?: any;
  error?: string;
}

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
    return this.http.post('api/auth', {
      username
    });
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
