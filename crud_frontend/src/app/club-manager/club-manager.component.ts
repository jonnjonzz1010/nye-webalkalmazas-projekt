import {Component, OnInit, ViewChild} from '@angular/core';
import {LoggerService} from '../shared/logger.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {HttpClient} from '@angular/common/http';
import {EndPoints} from '../shared/EndPoints';
import {CommonService} from '../shared/common.service';

@Component({
    selector: 'app-club-manager',
    templateUrl: './club-manager.component.html',
    styleUrls: ['./club-manager.component.css']
})
export class ClubManagerComponent implements OnInit {

    facilitators: any;
    clubs: any;
    category: any;
    updateContainer: string;

    successMessage: string;
    errorMessage: string;

    constructor(private apiService: CommonService,
                private loggerService: LoggerService,
                private spinner: NgxSpinnerService,
                private http: HttpClient,
                private endpoints: EndPoints) {
    }

    ngOnInit(): void {
        this.updateContainer = 'hidden';
        this.successMessage = null;
        this.errorMessage = null;
        this.getFacilitators();
        this.getClubs();
    }

    createClub(name, faci_id) {
        const data = {
            'name': name,
            'defaultFacilitatorRefId': faci_id
        };

        this.spinner.show();
        this.apiService.post(data, this.endpoints.create_club).subscribe((response: any) => {
                this.spinner.hide();
                console.log(response);
            },
            error => {
                this.spinner.hide();
                this.loggerService.log('error', error);
            }
        );
    }

    getFacilitators() {
        this.spinner.show();
        this.apiService.get('', this.endpoints.facilitators).subscribe((response: any) => {
                this.spinner.hide();
                this.facilitators = response;
                console.log(response);
            },
            error => {
                this.spinner.hide();
                this.loggerService.log('error', error);
            }
        );
    }

    getClubs() {
        this.spinner.show();
        this.apiService.get('', this.endpoints.create_club).subscribe((response: any) => {
                this.spinner.hide();
                this.clubs = response;
                console.log(response);
            },
            error => {
                this.spinner.hide();
                this.loggerService.log('error', error);
            }
        );
    }

    updateCategory(name: string, id: string, text, html) {
    }

    hide() {
        this.updateContainer = 'hidden';
    }

    deleteData(id) {
    }
}
