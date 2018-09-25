import { trigger, transition, style, animate, group } from '@angular/animations';

/**
 * 淡入动画
 * @param duration 持续时间(ms)
 */
export const fadeIn = (duration: number = 100) => {
    return trigger('fadeIn', [
        transition(':enter', [
            style({
              transform: 'translateX(100%)',
              height: 0,
            }),
            animate(`${duration}ms ease-out`)
          ]),
    ]);
};

/**
 * 淡出动画
 * @param duration 持续时间(ms)
 */
export const fadeOut = (duration: number = 100) => {
    return trigger('fadeOut', [
        transition(':leave', [
            style({
                height: '*',
                overflow: 'hidden',
            }),
            animate(`${duration}ms ease-out`, style({
                opacity: 0,
                height: 0,
                transform: 'translateX(100%)',
            }))
          ]),
    ]);
};


