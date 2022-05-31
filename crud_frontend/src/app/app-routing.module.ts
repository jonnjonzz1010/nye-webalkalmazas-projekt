import {Routes, RouterModule} from '@angular/router';

import {FullComponent} from './layouts/full/full.component';
import {BlankComponent} from './layouts/blank/blank.component';
import {AuthGuard} from './_guards/auth.guard';
import {UserGuard} from './_guards/user.guard';
import {ManageCategoryComponent} from './category/manage-category/manage-category.component';
import {ClubManagerComponent} from './club-manager/club-manager.component';
import {CreateComponent} from './employee/create/create.component';
import {ListComponent} from './employee/list/list.component';
import {UpdateComponent} from './employee/update/update.component';


export const Approutes: Routes = [
    {
        path: '',
        component: BlankComponent,
        children: [
            {path: '', redirectTo: '/authentication/login', pathMatch: 'full'},
            {
                path: 'authentication',
                loadChildren:
                    () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
            }
        ]
    },
    {
        path: '',
        component: FullComponent,
        children: [
            {
                path: 'manage-club',
                component: ClubManagerComponent,

            },
        ]
    },

    {
        path: '',
        component: FullComponent,
        children: [
            {
                path: 'create-emp',
                component: CreateComponent,

            },
        ]
    },

    {
        path: '',
        component: FullComponent,
        children: [
            {
                path: 'list',
                component: ListComponent,

            },
        ]
    },

    {
        path: '',
        component: FullComponent,
        children: [
            {
                path: 'update',
                component: UpdateComponent,

            },
        ]
    },
    /*{
        path: '**',
        redirectTo: '/authentication/404'
    }*/
];
