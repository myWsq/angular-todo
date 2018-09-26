/**
 * @file 在这里获取关于用户信息
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserState } from '../store/user';
import { MyResponse } from '../http-interceptors';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * 获得全部的用户列表
   */
  getAllUser() {
      return this.http.get<MyResponse<User[]>>('/api/user');
  }

  /**
   * 附身到某个用户
   * @param username 用户唯一标识
   */
  signTo(username: string) {
    return this.http.put<MyResponse<UserState>>('/api/auth', {
      username
    });
  }
}
