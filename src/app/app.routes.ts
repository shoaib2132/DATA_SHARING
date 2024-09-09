import { Routes } from '@angular/router';
import { LoginComponent } from '../common/login/login.component';
import { DashboardComponent } from '../common/Layout-Page/dashboard/dashboard.component';
import { LayoutComponent } from '../common/Layout-Page/layout/layout.component';
import { ForgetpasswordComponent } from '../common/forgetpassword/forgetpassword.component';
import { UnauthorizedPageComponent } from '../common/unauthorized-page/unauthorized-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"dashboard",
        component:DashboardComponent
    },
    {
        path:"layout",
        component:LayoutComponent
    },
    {
        path:"forgetpassword",
        component:ForgetpasswordComponent
    },
    {
        path:"unauthorized",
        component:UnauthorizedPageComponent    }
];
