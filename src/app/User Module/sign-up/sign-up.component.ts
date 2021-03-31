import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api-service';
import { NotificationService } from 'src/app/Notification/notification-service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userInfo: any;
  userRegistrationForm: FormGroup;
  isSubmitted: boolean;

  constructor(private router: Router,
    private apiService: ApiService,
    private notificationService: NotificationService,
    private userRegistrationBuilder: FormBuilder) { }

  get name() {
    return this.userRegistrationForm.get('name');
  }
  get email() {
    return this.userRegistrationForm.get('email');
  }
  get password() {
    return this.userRegistrationForm.get('password');
  }

  ngOnInit() {
    this.userRegistrationForm = this.userRegistrationBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phone: ['',],
      dateofbirth: ['',],
      address:["",],
      cart:["",],
      history:["",],
      cards:["",],
      profilePhoto: ["",]
    });
  }

  RegisterUser() {
    if (this.userRegistrationForm.valid) {
      this.apiService.signup(this.userRegistrationForm.value).subscribe((res) => {
        this.notificationService.showNotification("success", "You have successfully signed up");
        this.router.navigate(['user']);
        }, (error) => {
        this.isSubmitted = !this.isSubmitted;
        });
    } else {
      Object.keys(this.userRegistrationForm.controls).forEach(field => {
        const control = this.userRegistrationForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }
}
