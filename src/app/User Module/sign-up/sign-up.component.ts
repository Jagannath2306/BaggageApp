import { Component, OnInit } from '@angular/core';
import { UserAuthService } from "../../shared/User Auth/user-auth.service"
import { Router } from '@angular/router';
import { SubjectDataService } from 'src/app/shared/Services/subject-data.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  // registerUserData = {
   //  name : ""
  //   email: "",
  //   password: "",
  //   phone: "",
  //   address: [],
  //   cart: [],
  //   history: [],
  //   cards:[],
  //   profileImg:""
  // };
  userInfo: any;
  userRegistrationForm: FormGroup;
  isSubmitted: boolean;
  constructor(private auth: UserAuthService,
    private router: Router,
    private subService: SubjectDataService,
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
      address:["",],
      cart:["",],
      history:["",],
      cards:["",],
      profileImg:["",]
    });

  }
  RegisterUser() {
    if (this.userRegistrationForm.valid) {
        this.auth.registerUser(this.userRegistrationForm.value).subscribe((res) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(this.userRegistrationForm.value));
          this.router.navigate(['/cart']);

          // User Name Update start
          this.auth.getSingleUser(JSON.parse(localStorage.getItem('user'))).subscribe((res) => {
            this.userInfo = res;
            this.subService.updateName(this.userInfo.user.fastName);
          });
          // User Name Update end
        }, (error) => {
          this.isSubmitted = !this.isSubmitted;
          console.log(error)
        });
    } else {
      Object.keys(this.userRegistrationForm.controls).forEach(field => {
        const control = this.userRegistrationForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }
}
