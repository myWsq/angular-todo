import { Action } from '@ngrx/store';

/** 角色列表 */
export enum Roles {
    CUSTOMER = 'CUSTOMER',
    ADMIN = 'ADMIN',
    SUPER_ADMIN = 'SUPER_ADMIN',
  }


/** 用户的基本属性 */
export interface User {
    username: string;
    roles: Roles[];
}
/** 可能处于附身状态的用户 */
export interface UserState extends User {
    originUser?: User;
}

export enum UserActionType {
    /** 设置当前用户 */
    SET = '[User] Login',
    /** 清空用户 */
    CLEAR = '[User] Logout',
}

export class UserSetAction implements Action {
    type = UserActionType.SET;
    constructor(
        public payload: UserState
    ) { }
}

export class UserClearAction implements Action {
    type = UserActionType.CLEAR;
}

export function userReducer(state: UserState, action: Action ) {
    switch (action.type) {
        case UserActionType.SET:
            const setAction = action as UserSetAction;
            return setAction.payload;

        case UserActionType.CLEAR:
            return null;

        default:
            return state;
    }
}
