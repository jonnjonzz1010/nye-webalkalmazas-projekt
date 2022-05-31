import {Component, AfterViewInit, OnInit} from '@angular/core';
import {ADMINS_ROUTES, FACILI_ROUTES} from './menu-items';
import {RouteInfo} from './sidebar.metadata';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TranslateService} from '@ngx-translate/core';

declare var $: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    showMenu = '';
    showSubMenu = '';
    name = localStorage.getItem('user_name');
    public sidebarnavItems: any[];


    // this is for the open close
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    addActiveClass(element: any) {
        if (element === this.showSubMenu) {
            this.showSubMenu = '0';
        } else {
            this.showSubMenu = element;
        }
    }

    constructor(
        private router: Router,
        private route: ActivatedRoute) {
    }

    // End open close
    ngOnInit() {
        if (localStorage.getItem('user_roles').includes('ADMINISTRATOR')) {
            this.sidebarnavItems = ADMINS_ROUTES.filter(sidebarnavItem => sidebarnavItem);
        } else {
            this.sidebarnavItems = FACILI_ROUTES.filter(sidebarnavItem => sidebarnavItem);
        }

    }
}
