import { trigger, transition, style, animate, group } from '@angular/animations';

/**
 * 淡入动画
 * @param duration 持续时间(ms)
 */
export const fadeIn = (duration: number = 100) => {
    return trigger('fadeIn', [
        transition(':enter', [
            style({
              opacity: 0,
            }),
            animate(duration)
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
            animate(duration, style({
                opacity: 0,
            }))
          ]),
    ]);
};


