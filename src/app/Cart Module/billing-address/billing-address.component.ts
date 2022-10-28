import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { NotificationService } from 'src/app/Notification/notification-service';
import { UserRepository } from 'src/app/shared/Repositories/User-repo';
import { ApiService } from 'src/app/shared/services/api-service';
import { UserSuccessAction } from 'src/app/State Management/actions/user-action';
import { RootReducerState } from 'src/app/State Management/reducers';
@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.css']
})
export class BillingAddressComponent implements OnInit {
  loggedUser: any;
  defaultCheck = 0;
  isSelect = true;
  selectedAddress: any;
  constructor(private router: Router,
    private actRouter: ActivatedRoute,
    private userRepo: UserRepository,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private store: Store<RootReducerState>,
    private fb: FormBuilder) { }
  isSubmitted: boolean;
  billingAddress = this.fb.group({
    address: this.fb.array([]),
  });

  addbillingAddress = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    street: ['', [Validators.required], Validators.minLength(20)],
    landMark: ['', [Validators.required], Validators.minLength(20)],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    dist: ['', [Validators.required]],
    zip: ['', [Validators.required]],

  });

  // get firstName() {
  //   return this.address.get('firstName');
  // }
  // get lastName() {
  //   return this.address.get('lastName');
  // }
  // get phone() {
  //   return this.address.get('phone');
  // }
  // get email() {
  //   return this.address.get('email');
  // }
  // get city() {
  //   return this.address.get('city');
  // }
  // get state() {
  //   return this.address.get('state');
  // }
  // get dist() {
  //   return this.address.get('dist');
  // }
  // get zip() {
  //   return this.address.get('zip');
  // }

  ngOnInit() {
    this.userRepo.getLogedUser().subscribe((getStoreData) => {
      this.loggedUser = getStoreData;
    });
    this.setControlValues(this.loggedUser);
  }

  get address() {
    return this.billingAddress.get('address') as FormArray;
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
      zip: data ? data.zip : ''
    }));
    return false;
  }
  setControlValues(user) {
    this.billingAddress.patchValue({
    });
    user.address.map(elm => {
      this.addAddress(elm);
    })
  }
  radioChangeHandler(address: any) {
    this.selectedAddress = address.value;
  }
  submitForm() {
    this.userRepo.getLogedUser().subscribe((getStoreData) => {
      let userOrders = getStoreData.orders;
      if (userOrders.length >= 1) {
        if (userOrders[userOrders.length - 1].orderPlaced == true) {
          this.loggedUser.orders[userOrders.length - 1].address = this.selectedAddress;
          this.store.dispatch(new UserSuccessAction(this.loggedUser));
          this.router.navigate(["cart/review"]);
          console.log(this.loggedUser)
        } else {
          this.loggedUser.orders[userOrders.length - 1].address = this.selectedAddress;
          this.store.dispatch(new UserSuccessAction(this.loggedUser));
           this.router.navigate(["cart/review"]);
          console.log(this.loggedUser)
        }
      }
      
    });
  }
  submitAddress() {
    if (this.addbillingAddress.value) {
      let userAddress = {};
      userAddress = Object.assign({ "addressNo": this.loggedUser.address.length }, this.addbillingAddress.value)
      this.apiService.addAddress(userAddress).subscribe((res) => {
        this.store.dispatch(new UserSuccessAction(res));
      })
      this.loggedUser.orders[this.loggedUser.orders.length - 1].address = userAddress;
      this.store.dispatch(new UserSuccessAction(this.loggedUser));
      console.log(this.loggedUser)
      this.router.navigate(["cart/review"]);
    }
  }
  choseAddress() {
    $("#selectAdd").toggle();
    $("#newAdd").toggle();
    this.isSelect = true;
  }
  addNewAddress() {
    $("#selectAdd").toggle();
    $("#newAdd").toggle();
    this.isSelect = false;
  }

  showPaymentPortal() {
    this.router.navigate(["cart/review"]);
  }

}
