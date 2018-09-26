import { trigger, transition, style, animate, group } from '@angular/animations';

/**
 * 展开进入
 * @param duration 持续时间(ms)
 * @param transformOrigin 缩放原点
 */
export const slideIn = (duration: number = 100, transformOrigin?: string) => {
    return trigger('slideIn', [
        transition(':enter', [
            style({
                height: 0,
                overflow: 'hidden',
                transformOrigin: 'top'
            }),
            animate(`${duration}ms ease-in`, style({
                height: '*',
            }))
          ]),
    ]);
};

/**
 * 卷着退出
 * @param duration 持续时间(ms)
 * @param transformOrigin 缩放原点
 */
export const slideOut = (duration: number = 100) => {
    return trigger('slideOut', [
        transition(':leave', [
            style({
                height: '*'
            }),
            animate(`${duration}ms ease-out`, style({
                height: 0,
                overflow: 'hidden',
            }))
          ]),
    ]);
};


