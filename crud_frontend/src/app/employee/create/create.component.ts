import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../shared/common.service';
import {LoggerService} from '../../shared/logger.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {HttpClient} from '@angular/common/http';
import {EndPoints} from '../../shared/EndPoints';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    constructor(private apiService: CommonService,
                private loggerService: LoggerService,
                private spinner: NgxSpinnerService,
                private http: HttpClient,
                private endpoints: EndPoints) {
    }

    ngOnInit(): void {
    }

    createEmployee(name, age, gender, email, address) {
        const data = {
            'name': name,
            'age': age,
            'gender': gender,
            'email': email,
            'address': address
        };

        this.spinner.show();
        this.apiService.post(data, this.endpoints.create).subscribe((response: any) => {
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
