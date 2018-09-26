/**
 * 拦截器默认行为:
 * 1. 出现非200错误时跳转到错误页面
 * 2. 出现200错误时提示错误信息
 * 3. 不缓存
 * 4. 不显示全局加载框
 */

const PREFIX = 'X-';

/** 不进行错误跳转 */
export const DO_NOT_CATCH = PREFIX + 'DO_NOT_CATCH';

/** 不提示错误 */
export const DO_NOT_TAP = PREFIX + 'DO_NOT_TAP';

/** 加入缓存 */
export const CACHE = PREFIX + 'CACHE';

/** 显示加载框 */
export const LOADING = PREFIX + 'LOADING';
