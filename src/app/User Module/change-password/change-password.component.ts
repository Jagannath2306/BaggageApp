import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/Notification/notification-service';
import { ApiService } from 'src/app/shared/services/api-service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePassword: FormGroup;
  isSubmitted: boolean;
  constructor(private changePasswordBuilder: FormBuilder,
    private apiService: ApiService,
    private notificationService: NotificationService,
    private router: Router) { }

  get password() {
    return this.changePassword.get('password');
  }
  get new_password() {
    return this.changePassword.get('new_password');
  }
  get confirm_password() {
    return this.changePassword.get('confirm_password');
  }

  ngOnInit() {
    this.changePassword = this.changePasswordBuilder.group({
      password: ['', [Validators.required]],
      new_password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    });
  }
  updatePassword() {
    if (this.changePassword.valid) {
      console.log(this.changePassword.value);
      this.apiService.updatePassword(this.changePassword.value).subscribe((res) => {
        this.notificationService.showNotification("success", "Your Password has been Updated Successfully..!!");
        this.router.navigate(['/user/profile']);
      }, (error) => {

      });
    }
    this.isSubmitted = !this.isSubmitted;
  }
  cancle() {
    this.router.navigate(['/user/profile']);
  }
}

