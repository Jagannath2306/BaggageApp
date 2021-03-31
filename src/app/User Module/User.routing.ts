import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogOutComponent } from './log-out/log-out.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../shared/guards/auth-guard';
import { AnonGuard } from '../shared/guards/anon-guard';


const routes: Routes = [
    {
        path: '', component: LoginComponent,
        canActivate: [AnonGuard]
     },
     
    {
        path: "signup", component: SignUpComponent,
        canActivate: [AnonGuard]
    },
    {
        path: "logout", component: LogOutComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "forgot-Password", component: ForgotPasswordComponent,
        canActivate: [AnonGuard]
    },
    {
        path: "profile", component: ProfileComponent,
        canActivate: [AuthGuard]
    }
   
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);