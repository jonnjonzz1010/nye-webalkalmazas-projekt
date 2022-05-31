import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../shared/common.service';
import {LoggerService} from '../../shared/logger.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {HttpClient} from '@angular/common/http';
import {EndPoints} from '../../shared/EndPoints';
import {Router} from '@angular/router';

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

    employee: any;

    constructor(private apiService: CommonService,
                private loggerService: LoggerService,
                private spinner: NgxSpinnerService,
                private http: HttpClient,
                private endpoints: EndPoints,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getData(localStorage.getItem('emp_id'));
    }

    getData(id) {
        this.apiService.get('', this.endpoints.getById + id).subscribe((response: any) => {
                this.spinner.hide();
                this.employee = response;
                console.log(response);
            },
            error => {
                this.spinner.hide();
                this.loggerService.log('error', error);
            }
        );
    }


    updateEmployee(name, age, gender, email, address) {
        const data = {
            'name': name,
            'age': age,
            'gender': gender,
            'email': email,
            'address': address
        };

        this.spinner.show();
        this.apiService.put(data, this.endpoints.update, localStorage.getItem('emp_id')).subscribe((response: any) => {
                this.spinner.hide();
                console.log(response);
            },
            error => {
                this.spinner.hide();
                this.loggerService.log('error', error);
            }
        );
    }
}
