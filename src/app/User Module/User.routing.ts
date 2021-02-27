import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogOutComponent } from './log-out/log-out.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
    {
        path: '', component: LoginComponent,
     },
     
    {
        path:"signup", component: SignUpComponent
    },
    {
        path:"logout", component: LogOutComponent
    },
    {
        path:"forgot-Password", component: ForgotPasswordComponent
    },
    {
        path:"profile", component: ProfileComponent
    }
   
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);