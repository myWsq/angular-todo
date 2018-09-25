import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as shortid from 'shortid';
/** 消息基础类型 */
export class MsgItem {
  id = shortid.generate();
  constructor(
    public type: 'success'|'error'|'default'|'warning',
    public text: string,
    public duration: number = 2000
  ) {}
}

/** 消息多播 用于组件间传递消息 */
export const msgSubject = new Subject<MsgItem>();

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor() { }

  success(text: string) {
    msgSubject.next(new MsgItem('success', text));
  }
  error(text: string) {
    msgSubject.next(new MsgItem('error', text));
  }
  warning(text: string) {
    msgSubject.next(new MsgItem('warning', text));
  }
  message(text: string) {
    msgSubject.next(new MsgItem('default', text));
  }

  push(options: MsgItem) {
    msgSubject.next(options);
  }
}
