import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../shared/common.service';
import {LoggerService} from '../../shared/logger.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {HttpClient} from '@angular/common/http';
import {EndPoints} from '../../shared/EndPoints';
import {Router} from '@angular/router';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    employees: any;

    constructor(private apiService: CommonService,
                private loggerService: LoggerService,
                private spinner: NgxSpinnerService,
                private http: HttpClient,
                private endpoints: EndPoints,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getData();
    }

    getData() {
        this.apiService.get('', this.endpoints.get).subscribe((response: any) => {
                this.spinner.hide();
                this.employees = response;
                console.log(response);
            },
            error => {
                this.spinner.hide();
                this.loggerService.log('error', error);
            }
        );
    }

    gotUpdate(id) {
        localStorage.removeItem('emp_id');
        this.router.navigate(['update']);
        localStorage.setItem('emp_id', id);
    }

    delete(id) {
        this.apiService.delete(id, this.endpoints.delete).subscribe((response: any) => {
                this.spinner.hide();
                this.employees = response;
                console.log(response);
            },
            error => {
                this.spinner.hide();
                this.loggerService.log('error', error);
            }
        );
    }
}
