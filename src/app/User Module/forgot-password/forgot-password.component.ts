import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/shared/services/api-service';
import { NotificationService } from 'src/app/Notification/notification-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassword: FormGroup;
  isSubmitted: boolean;
  isEmailSend = false;
  constructor(private forgotPasswordBuilder: FormBuilder,
    private apiService: ApiService,
    private notificationService: NotificationService,
    private router: Router) { }

  get email() {
    return this.forgotPassword.get('email');
  }
  get reset_password_token() {
    return this.forgotPassword.get('reset_password_token');
  }
  get new_password() {
    return this.forgotPassword.get('new_password');
  }
  get confirm_password() {
    return this.forgotPassword.get('confirm_password');
  }

  ngOnInit() {
    this.forgotPassword = this.forgotPasswordBuilder.group({
      email: ['', !this.isEmailSend ? [Validators.required, Validators.email] : ''],
      reset_password_token: ['',],
      new_password: ['',],
      confirm_password: ['',]
    });
  }

  sendEmail() {
    if (this.forgotPassword.valid) {
      this.apiService.sendResetPasswordEmail(this.forgotPassword.value).subscribe((res) => {
        this.notificationService.showNotification("success", "Verification Token has been sent to your Registrated Email address..!!")
        this.isEmailSend = true;
        this.forgotPassword.get('reset_password_token').setValidators([Validators.required]);
        this.forgotPassword.get('new_password').setValidators([Validators.required]);
        this.forgotPassword.get('confirm_password').setValidators([Validators.required]);
      }, (error) => {
        this.isEmailSend = false;
      });
    }
    this.isSubmitted = !this.isSubmitted;
  }
  changePassword() {
    if (this.forgotPassword.valid) {
      this.apiService.resetPassword(this.forgotPassword.value).subscribe((res) => {
        this.notificationService.showNotification("success", "Your Password has been Reseted Successfully..!!");
        this.router.navigate(['user']);
      }, (error) => {

      });
    }
    this.isSubmitted = !this.isSubmitted;
  }

}
