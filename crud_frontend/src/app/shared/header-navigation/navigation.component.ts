import {Component, AfterViewInit, EventEmitter, Output, OnInit} from '@angular/core';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {Router} from '@angular/router';
import {CommonService} from '../common.service';
import {LoggerService} from 'src/app/shared/logger.service';

declare var $: any;

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
    @Output() toggleSidebar = new EventEmitter<void>();

    public config: PerfectScrollbarConfigInterface = {};
    name = localStorage.getItem('user_name');

    constructor(private router: Router) {
    }

    ngOnInit() {
    }


    logout() {
        localStorage.removeItem('user_token');
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_name');
        this.router.navigate(['authentication/login']);
    }
}
