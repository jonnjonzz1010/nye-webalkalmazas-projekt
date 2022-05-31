import {RouteInfo} from './sidebar.metadata';

export const ADMINS_ROUTES: RouteInfo[] = [
    {
        path: '',
        title: 'Menus',
        icon: 'icon-Bird',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
        path: '/create-emp',
        title: 'Create Employee',
        icon: 'icon-Files',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/list',
        title: 'Employee List',
        icon: 'icon-Files',
        class: '',
        extralink: false,
        submenu: []
    },
   /* {
        path: '/manage-learners',
        title: 'Manage Learners',
        icon: 'icon-Files',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/manage-administrators',
        title: 'Manage Administrators',
        icon: 'icon-Files',
        class: '',
        extralink: false,
        submenu: []
    }*/
];

export const FACILI_ROUTES: RouteInfo[] = [
    {
        path: '',
        title: 'Menus',
        icon: 'icon-Bird',
        class: 'nav-small-cap',
        extralink: true,
        submenu: []
    },
    {
        path: '/manage-order',
        title: 'Your Orders',
        icon: 'icon-Files',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/home',
        title: 'Return to Product',
        icon: 'icon-Files',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/cart',
        title: 'Cart',
        icon: 'icon-Files',
        class: '',
        extralink: false,
        submenu: []
    }
];
