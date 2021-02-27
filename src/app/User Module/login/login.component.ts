import { Component } from '@angular/core';
import { UserAuthService } from 'src/app/shared/User Auth/user-auth.service';
import { Router } from '@angular/router';
import { SubjectDataService } from 'src/app/shared/Services/subject-data.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userInfo: any;
  userForm: any;
  isSubmitted: boolean;
  userLoginForm: FormGroup;

  // userLoginForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // });


  constructor(private _auth: UserAuthService,
    private router: Router,
    private subService: SubjectDataService,
    private userFormBuilder: FormBuilder) {
  }

  get email() {
    return this.userLoginForm.get('email');
  }
  get password() {
    return this.userLoginForm.get('password');
  }
  ngOnInit() {
    this.userLoginForm = this.userFormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

  }

  LoginUser() {

    if (this.userLoginForm.valid) {
      console.log(this.userLoginForm.value);
      this._auth.validateUser(this.userLoginForm.value).subscribe((res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(this.userLoginForm.value));
        this.router.navigate(['cart']);

        // getting user name for display in header start
        this._auth.getSingleUser(JSON.parse(localStorage.getItem('user'))).subscribe((res) => {
          this.userInfo = res;
          this.subService.updateName(this.userInfo.user.name);
        });
        // getting user name for display in header end
        
      }, (err) => {
        alert("error")
        this.isSubmitted = !this.isSubmitted;
      });
    } else {
      Object.keys(this.userLoginForm.controls).forEach(field => {
        const control = this.userLoginForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

}
