import { trigger, transition, style, animate, state, keyframes } from '@angular/animations';

/**
 * 展开进入
 * @param duration 持续时间(ms)
 * @param transformOrigin 缩放原点
 */
export const navSlideIn = () => {
    return trigger('slideIn', [
        transition(':enter', [
            style({
                height: 0,
                overflow: 'hidden',
            }),
            animate(`200ms ease-in`, style({
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
export const navSlideOut = () => {
    return trigger('slideOut', [
        transition(':leave', [
            style({
                height: '*'
            }),
            animate(`200ms ease-in-out`, style({
                height: 0,
                overflow: 'hidden',
            }))
          ]),
    ]);
};

export const active = () => {
    return trigger('active', [
        state('active', style({
            color: '#555',
            transform: 'scale(1.3)'
        })),
        state('inactive', style({
            color: '#bcbcbc',
            transform: 'scale(1)'
        })),
        transition('active => inactive', [
            animate('200ms ease-in', keyframes([
                style({
                    transform: 'scale(1.3)',
                    color: '#555',
                    offset: 0
                }),
                style({
                    transform: 'scale(0.8)',
                    color: '#efefef',
                    offset: 0.7
                }),
                style({
                    transform: 'scale(1)',
                    color: '#bcbcbc',
                    offset: 1
                })
            ]))
        ]),
        transition('inactive => active', [
            animate('200ms ease-in-out', keyframes([
                style({
                    transform: 'scale(1)',
                    offset: 0
                }),
                style({
                    transform: 'scale(1.6)',
                    offset: 0.7
                }),
                style({
                    transform: 'scale(1.3)',
                    offset: 1
                })
            ]))
        ])
    ]);
};


