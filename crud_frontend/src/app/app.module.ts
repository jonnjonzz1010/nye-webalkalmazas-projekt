import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    CommonModule,
    LocationStrategy,
    HashLocationStrategy, DatePipe, UpperCasePipe
} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AgmCoreModule} from '@agm/core';
import {ToastrModule} from 'ngx-toastr';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {FullComponent} from './layouts/full/full.component';
import {BlankComponent} from './layouts/blank/blank.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NavigationComponent} from './shared/header-navigation/navigation.component';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {BreadcrumbComponent} from './shared/breadcrumb/breadcrumb.component';

import {Approutes} from './app-routing.module';
import {AppComponent} from './app.component';
import {SpinnerComponent} from './shared/spinner.component';

import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelSpeed: 1,
    wheelPropagation: true,
    minScrollbarLength: 20
};
import {MomentModule} from 'ngx-moment';
import {JwtInterceptor} from './_interceptors/jwt.interceptor';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CommonService} from './shared/common.service';

import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {NgxSpinnerModule} from 'ngx-spinner';
import {DataTablesModule} from 'angular-datatables';
import {EndPoints} from './shared/EndPoints';
import {NgBootstrapFormValidationModule} from 'ng-bootstrap-form-validation';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { ClubManagerComponent } from './club-manager/club-manager.component';
import {CreateComponent} from './employee/create/create.component';
import {UpdateComponent} from './employee/update/update.component';
import {ListComponent} from './employee/list/list.component';

registerLocaleData(localeFr);

@NgModule({
    declarations: [
        AppComponent,
        SpinnerComponent,
        FullComponent,
        BlankComponent,
        NavigationComponent,
        BreadcrumbComponent,
        SidebarComponent,
        ClubManagerComponent,
        CreateComponent,
        UpdateComponent,
        ListComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule,
        ToastrModule.forRoot(),
        RouterModule.forRoot(Approutes),
        PerfectScrollbarModule,
        Ng2SearchPipeModule,
        NgMultiSelectDropDownModule.forRoot(),
        NgBootstrapFormValidationModule.forRoot(),
        AgmCoreModule.forRoot({apiKey: 'AIzaSyBUb3jDWJQ28vDJhuQZxkC0NXr_zycm8D0'}),
        DragDropModule,
        MomentModule.forRoot({
            relativeTimeThresholdOptions: {
                'm': 59
            }
        }),
        NgxSpinnerModule,
        DataTablesModule,
        NgxDatatableModule
    ],
    providers: [
        CommonService,
        EndPoints,
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        DatePipe,
        UpperCasePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

export function httpTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
