import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ApiManagerService} from '../../_services/api-manager.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {AlertService} from '../../_alert';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {email} from 'ngx-custom-validators/src/app/email/validator';
import {LoggerService} from 'src/app/shared/logger.service';
import {ADMINS_ROUTES, FACILI_ROUTES} from '../../../shared/sidebar/menu-items';
import {CommonService} from '../../../shared/common.service';
import {EndPoints} from '../../../shared/EndPoints';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, AfterViewInit {
    options = {
        autoClose: true,
        keepAfterRouteChange: false
    };
    loginData: FormGroup;
    submitted = false;

    returnUrl: string;

    constructor(private apiManagerService: CommonService,
                private formBuilder: FormBuilder,
                private spinner: NgxSpinnerService,
                private alertService: AlertService,
                private router: Router,
                private route: ActivatedRoute,
                private loggerService: LoggerService,
                private endpoints: EndPoints) {
    }

    ngOnInit() {
        this.loginData = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }

    get fields() {
        return this.loginData.controls;
    }

    ngAfterViewInit() {
        if (this.route.snapshot.queryParams['verified'] === 'true') {
            this.alertService.success('succ_email_verified', {autoClose: true});
        }

        if (this.route.snapshot.queryParams['verified'] === 'false') {
            this.alertService.error('err_email_verify_expired', {autoClose: true});
        }
    }

    public doLogin(): void {
        this.spinner.show();
        this.submitted = true;

        if (this.loginData.invalid) {
            this.spinner.hide();
            return;
        }

        const data = {'username': 'admin', 'password': 'admin'};

        this.apiManagerService.post(data, this.endpoints.login).subscribe((response: any) => {
                this.spinner.hide();
                console.log(response);
                this.loggerService.log('response', response);
                localStorage.setItem('user_token', response.token);
                localStorage.setItem('user_id', response.userId);
                localStorage.setItem('user_name', response.firstName + ' ' + response.lastName);
                localStorage.setItem('user_username', response.username);
                localStorage.setItem('user_roles', response.userType);

                if (localStorage.getItem('user_roles').includes('ADMINISTRATOR')) {
                    console.log(localStorage.getItem('user_roles'));
                    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/manage-club';
                } else {
                    console.log(localStorage.getItem('user_roles'));
                    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
                }
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.spinner.hide();
                this.loggerService.log('error', error.status);
                if (error.status === 401) {
                    this.alertService.error('Invalid Credentials', {autoClose: true});
                } else {
                    this.alertService.error('Something Went Wrong. Try Again!', {autoClose: true});
                }
            });
    }
}
