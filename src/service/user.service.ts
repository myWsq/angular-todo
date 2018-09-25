/**
 * @file 在这里获取关于用户信息
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../store/user';

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
      return this.http.get<User[]>('/api/user');
  }
}
