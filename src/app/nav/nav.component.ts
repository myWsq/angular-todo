/**
 * @file 全局横向导航组件
 */

import { Component, OnInit } from '@angular/core';
import { NavService, navVisibleSubject, navMenuSubjecet, menuConfig } from './nav.service';
import { navSlideIn, navSlideOut, active } from './nav.animation';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

/** 导航配置 */
export interface MenuItem {
    /** 导向的地址 */
    index: string;
    /** 导航文字 */
    text: string;
    /** 子路由列表 */
    children?: MenuItem[];
    /** 是否精确匹配 */
    exact?: boolean;
}

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.less'],
    animations: [navSlideIn(), navSlideOut(), active()],
    providers: [NavService]
})

export class NavComponent implements OnInit {
    visible = true;
    menus = menuConfig;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private navService: NavService
    ) { }

    get menuWithState() {
        return this.menus.map(item => {
            return {
                ...item,
                state: this.router.isActive(item.index, item.exact) ? 'active' : 'inactive'
            };
        });
    }

    ngOnInit() {
        /** 订阅菜单是否显示 */
        navVisibleSubject.subscribe(visible => {
            this.visible = visible;
        });

        /** 订阅菜单的动态变化 */
        navMenuSubjecet.subscribe(menus => {
            this.menus = menus;
        });
    }

    trackIndex(index, item: MenuItem) {
        return item.index;
    }

}
