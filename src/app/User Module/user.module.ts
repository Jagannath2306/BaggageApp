import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './User.routing';
// import {FormsModule} from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogOutComponent } from './log-out/log-out.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [LoginComponent, SignUpComponent, LogOutComponent, ForgotPasswordComponent, ProfileComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    SharedModule,
    routing,
    FormsModule,
    ReactiveFormsModule

  ],
  // exports:[LoginComponent, SignUpComponent, LogOutComponent,ForgotPasswordComponent,ProfileComponent]
})
export class UserModule { }
