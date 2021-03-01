import { Component } from '@angular/core';
import { UserAuthService } from 'src/app/shared/User Auth/user-auth.service';
import { Router } from '@angular/router';
import { SubjectDataService } from 'src/app/shared/Services/subject-data.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { GetSingleItemService } from 'src/app/shared/Services/Products/Get All Products/get-single-item.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 

  constructor(private _auth: UserAuthService,
    private router: Router,
    private subService: SubjectDataService,
    private fb: FormBuilder,
    private singleItem: GetSingleItemService) {
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
      this._auth.validateUser(this.userLoginForm.value).subscribe((res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(this.userLoginForm.value));
        this.router.navigate(['home']);

        // getting user name for display in header start
        let data = this.userLoginForm.value;
        this.singleItem.getSingleItem(data).subscribe((res: any) => {
          this.subService.updateName(res.user.name);
        });
      })
        // getting user name for display in header end
        , (err) => {
        this.isSubmitted = !this.isSubmitted;
        };
    } else {
      Object.keys(this.userLoginForm.controls).forEach(field => {
        const control = this.userLoginForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

}
