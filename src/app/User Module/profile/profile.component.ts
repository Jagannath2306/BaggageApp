import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    // private postSer: PostServicesService,
    // private singleItem: GetSingleItemService,
    private fb: FormBuilder,
    // private userUpdate: UpdateService,
    // private subService: SubjectDataService
  ) { }

  singleUser: any;
  singleUsertitle: any;
  status: string;

  userRegistrationForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    dateofbirth: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.minLength(10)]],
    profileImg: ['',],
    address: this.fb.array([]),
  });
  profileForm = this.fb.group({
    profileImg: ['',]
  });


  ngOnInit() {
  //   let data = JSON.parse(localStorage.getItem("user"));
  //   this.singleItem.getSingleItem(data).subscribe((res: any) => {
  //     this.singleUsertitle = res.user.name;
  //     this.singleUser = res;
  //     console.log(this.singleUser = res)
  //     this.status = "success";
  //   }), (err) => {
  //     this.status = "error";
  //   }
  // }

  // get address() {
  //   return this.userRegistrationForm.get('address') as FormArray;
  // }

  // addAddress(data) {
  //   this.address.push(this.fb.group({
  //     address: data ? data.address : ''
  //   }));
  //   return false;
  // }

  // setControlValues(user) {
  //   this.userRegistrationForm.patchValue({
  //     name: user.name,
  //     email: user.email,
  //     password: user.password,
  //     dateofbirth: user.dateofbirth,
  //     phone: user.phone

  //   });

  //   user.address.map(elm => {
  //     this.addAddress(elm);
  //   })
  // }

  // submitForm() {
  //   if (this.userRegistrationForm.value) {
  //     const updatedUser = Object.assign({}, this.userRegistrationForm.value, { "_id": this.singleUser.user._id })
  //     this.userUpdate._updateSingleUser(updatedUser).subscribe(
  //       (res) => {
  //         $("#modelSucc").modal('show');
  //         this.ngOnInit()
  //         this.subService.updateName(updatedUser.name);
  //       }, (err) => {
  //         alert("Something want woring " + err)
  //         $("#modelErr").modal('show');
  //       }
  //     )
  //   }

  // }
  // editProfile() {
  //   $("#profile-form").toggle();
  //   this.setControlValues(this.singleUser.user);
  // }

 // @ViewChild('fileupload') fileupload: ElementRef;

  // getImage(evt) {
  //   if (evt.target.files && evt.target.files[0]) {
  //     const render = new FileReader();
  //     render.onload = (event: ProgressEvent) => {
  //       console.log(event)
  //     }
  //   }
  // }

  // profileSubmit() {
  //   const data = Object.assign({}, { "_id": this.singleUser.user._id })

  //   this.userUpdate._updateUserProfile(data, this.fileupload.nativeElement.files[0]).subscribe((res) => {
  //     console.log(res)
  //   }, (err) => {
  //     console.log(err)
  //   }
  //   )

   }

}
