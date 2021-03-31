import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/Notification/notification-service';
import { ApiService } from 'src/app/shared/services/api-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router,
    private fb: FormBuilder,
    private apiService: ApiService,
    private notificationService: NotificationService) {
  }

  userInfo: any;
  userForm: any;
  isSubmitted: boolean;

  userLoginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  get email() {
    return this.userLoginForm.get('email');
  }
  get password() {
    return this.userLoginForm.get('password');
  }
  ngOnInit() {
  }

  LoginUser() {
    if (this.userLoginForm.valid) {
      this.apiService.loginAndSetToken(this.userLoginForm.value).subscribe((res) => {
        this.notificationService.showNotification("success", "Successfully Loggedin..!!")
        this.router.navigate(['home']);
      }, (error) => {
        
      });
    } else {
      Object.keys(this.userLoginForm.controls).forEach(field => {
        const control = this.userLoginForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }
 
}
