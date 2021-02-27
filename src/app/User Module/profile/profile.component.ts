import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostServicesService } from 'src/app/shared/Services/Post Services/post-services.service';
import { GetSingleItemService } from 'src/app/shared/Services/Products/Get All Products/get-single-item.service';
import { SubjectDataService } from 'src/app/shared/Services/subject-data.service';
import { UpdateService } from 'src/app/shared/Services/Update Services/update.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private postSer: PostServicesService,
    private singleItem: GetSingleItemService,
    private fb: FormBuilder,
    private userUpdate: UpdateService,
    private subService: SubjectDataService) { }

  singleUser: any;
  singleUsertitle: any;
  status: string;

  userRegistrationForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    phone: ['', [Validators.required, Validators.minLength(10)]],
    address: this.fb.array([]),
  });


  ngOnInit() {
    let data = JSON.parse(localStorage.getItem("user"));
    this.singleItem.getSingleItem(data).subscribe((res: any) => {
      this.singleUsertitle = res.user.name;
      this.singleUser = res;
      this.status = "success";
    }), (err) => {
      this.status = "error";
    }
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
      phone: user.phone
    });

    user.address.map(elm => {
      this.addAddress(elm);
    })
  }

  submitForm() {
    this.userRegistrationForm.value;

    if (this.userRegistrationForm.value) {
      const updatedUser = Object.assign({}, this.userRegistrationForm.value, { "_id": this.singleUser.user._id })
      this.userUpdate._updateSingleUser(updatedUser).subscribe(
        (res) => {
          $("#modelSucc").modal('show');
          this.ngOnInit()
          this.subService.updateName(updatedUser.name);
        }, (err) => {
          alert("Something want woring " + err)
          $("#modelErr").modal('show');
        }
      )
    }

  }
  editProfile() {
    $("#profile-form").toggle();
    this.setControlValues(this.singleUser.user);
  }

}
