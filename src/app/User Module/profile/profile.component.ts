import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/Notification/notification-service';
import { ApiService } from 'src/app/shared/services/api-service';
// import { PostServicesService } from 'src/app/shared/Services/Post Services/post-services.service';
// import { GetSingleItemService } from 'src/app/shared/Services/Products/Get All Products/get-single-item.service';
// import { SubjectDataService } from 'src/app/shared/Services/subject-data.service';
// import { UpdateService } from 'src/app/shared/Services/Update Services/update.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedUser;
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private notificationService: NotificationService
  ) { }

  userRegistrationForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    dateOfBirth: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.minLength(10)]],
    profileImg: ['',],
    address: this.fb.array([]),
  });
  profileForm = this.fb.group({
    profileImg: ['',]
  });


  ngOnInit() {
    this.apiService.fatchUser().subscribe((res) => {
      this.loggedUser = res;
    }, (err) => {
      
    })
  }

  get address() {
    return this.userRegistrationForm.get('address') as FormArray;
  }

  addAddress(data) {
    this.address.push(this.fb.group({
      address: data ? data.address : ''
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
      console.log(this.userRegistrationForm.value);
      this.apiService.updateProfile(this.userRegistrationForm.value).subscribe((res) => {
        this.notificationService.showNotification("success", "Your Profile has been Updated successfully..!!");
      }, (err) => {
      
      })
    }

  }
  editProfile() {
    $("#profile-form").toggle();
    this.setControlValues(this.loggedUser);
  }

  @ViewChild('fileupload') fileupload: ElementRef;

  getImage(evt) {
    if (evt.target.files && evt.target.files[0]) {
      const render = new FileReader();
      render.onload = (event: ProgressEvent) => {
        console.log(event)
      }
    }
  }

  profileSubmit() {
    const data = Object.assign({}, { "profilePhoto": this.fileupload.nativeElement.files[0].name })
    console.log(data)
    this.apiService.updateProfilePicture(data).subscribe((res) => {
      console.log(res)
    }, (err) => { })
    // this.userUpdate._updateUserProfile(data, this.fileupload.nativeElement.files[0]).subscribe((res) => {
  }
  }
