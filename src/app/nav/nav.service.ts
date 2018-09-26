import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuItem } from './nav.component';

export const navVisibleSubject = new Subject<boolean>();
export const navMenuSubjecet = new Subject<MenuItem[]>();

/** 初始导航配置 */
export const menuConfig: MenuItem[] = [
  {
    index: '/',
    exact: true,
    text: '首页'
  },
  {
    index: '/super_admin',
    text: '用户管理'
  }
];

@Injectable({
  providedIn: 'root'
})
export class NavService {
  hide() {
    navVisibleSubject.next(false);
  }
  show() {
    navVisibleSubject.next(true);
  }
  refresh(menus) {
    navMenuSubjecet.next(menus);
  }
  constructor() {

  }
}
