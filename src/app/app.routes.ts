import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from '../Common/Layout-Page/admin-layout/admin-layout.component';
import { authGuard } from '../Service/auth.guard';
import { userAuthGuard } from '../Service/user-auth.guard';
import { AdminLoginComponent } from '../Common/Login-Page/admin-login/admin-login.component';
import { UserLoginComponent } from '../Common/Login-Page/user-login/user-login.component';
import { AdminForgetPasswordComponent } from '../Common/Login-Page/admin-forget-password/admin-forget-password.component';
import { UserForgetPasswordComponent } from '../Common/Login-Page/user-forget-password/user-forget-password.component';
import { UserLayoutComponent } from '../Common/Layout-Page/user-layout/user-layout.component';

import { UserDashboardComponent } from '../Common/Dashboard/admin-dashboard/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from '../Common/Dashboard/admin-dashboard/admin-dashboard.component';
import { ClientPageComponent } from './Masters/client-page/client-page.component';
import { ClientLoginComponent } from '../Common/Login-Page/client-login/client-login.component';
export const routes: Routes = [
    { path: '', redirectTo: 'admin/login', pathMatch: 'full' },
    { path: 'user/login', component: UserLoginComponent },
    { path: 'user/login/:bankName', component: ClientLoginComponent },
    { path: 'user/forgetpassword', component: UserForgetPasswordComponent },
    {
        path: 'user', 
        canActivate:[userAuthGuard],
        component: UserLayoutComponent,
        children: [
      
    // { path: 'login/:client', component: ClientLoginComponent },
          { path: 'dashboard', component: UserDashboardComponent },
          
          { path: 'clientpage', component: ClientPageComponent },
      ]},
      {
        path: 'admin', 
        canActivate:[authGuard],
        component: AdminLayoutComponent,
        children: [
          { path: 'login', component: AdminLoginComponent },
          { path: 'dashboard', component: AdminDashboardComponent },
          { path: 'forgetpassword', component: AdminForgetPasswordComponent },
         
        ]}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
