import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NotificationService } from 'src/app/Notification/notification-service';
import { ApiService } from 'src/app/shared/services/api-service';
import { UserRequestAction, UserSuccessAction } from 'src/app/State Management/actions/user-action';
import { getUserdata, RootReducerState } from 'src/app/State Management/reducers';
import { UserRepository } from 'src/app/shared/Repositories/User-repo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedUser;
  selectedFile: File;
  isFile = false;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private notificationService: NotificationService,
    private store: Store<RootReducerState>,
    private userRepo: UserRepository
  ) { }

  userRegistrationForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    dateOfBirth: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.minLength(10)]],
    address: this.fb.array([]),
  });
  profileForm = this.fb.group({
    profilePhoto: ['',]
  });
  ngOnInit() {
    this.userRepo.getLogedUser().subscribe((getStoreData) => {
      this.loggedUser = getStoreData;
    });
  }
  get address() {
    return this.userRegistrationForm.get('address') as FormArray;
  }
  addAddress(data) {
    this.address.push(this.fb.group({
      firstName: data ? data.firstName : '',
      lastName: data ? data.lastName : '',
      phone: data ? data.phone : '',
      email: data ? data.email : '',
      street: data ? data.street : '',
      landMark: data ? data.landMark : '',
      city: data ? data.city : '',
      state: data ? data.state : '',
      dist: data ? data.dist : '',
      zip: data ? data.zip : '',
      addressNo: data ? data.zip : '',

    }));
    return false;
  }
  setControlValues(user) {
    this.userRegistrationForm.patchValue({
      name: user.name,
      email: user.email,
      password: user.password,
      dateOfBirth: user.dateOfBirth,
      phone: user.phone
    });
    user.address.map(elm => {
      this.addAddress(elm);
    })
  }
  submitForm() {
    if (this.userRegistrationForm.value) {
      let User = this.userRegistrationForm.value;
      User.address.forEach((element, index) => {
        return element.addressNo = index;
      });
      this.apiService.updateProfile(User).subscribe((res) => {
        this.store.dispatch(new UserSuccessAction(res));
        this.loggedUser = res;
        this.notificationService.showNotification("success", "Your Profile has been Updated successfully..!!");
        $("#profile-form").toggle();
        $(".userinfo").toggle();
      }, (err) => {

      })
    }
  }
  editProfile() {
    $("#profile-form").toggle();
    $(".userinfo").toggle();
    this.setControlValues(this.loggedUser);
  }
  removeAddress(address?: any, ind?: number) {
    console.log(address)
    console.log(ind)
  }
  // @ViewChild('fileupload') fileupload: ElementRef;
  //////////////////// or //////////////////////////
  onFileSelected(evt) {
    if (evt.target.files && evt.target.files[0]) {
      this.isFile = true;
      this.selectedFile = evt.target.files[0]
    }
  }

  profileSubmit() {
    this.apiService.updateProfilePicture(this.selectedFile).subscribe((res) => {
      this.isFile = false;
      this.apiService.fatchUser().subscribe((res) => {
        this.store.dispatch(new UserSuccessAction(res));
      });
      this.notificationService.showNotification("success", "Your Profile Image has been Updated Successfully..!!");
    }, (err) => {
      this.isFile = true;
    });
  }
  cancle() {
    $("#profile-form").toggle();
    $(".userinfo").toggle();
  }
}
