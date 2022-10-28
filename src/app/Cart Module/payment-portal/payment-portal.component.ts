import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { NotificationService } from 'src/app/Notification/notification-service';
import { UserRepository } from 'src/app/shared/Repositories/User-repo';
import { ApiService } from 'src/app/shared/services/api-service';
import { UserSuccessAction } from 'src/app/State Management/actions/user-action';
import { RootReducerState } from 'src/app/State Management/reducers';

@Component({
  selector: 'app-payment-portal',
  templateUrl: './payment-portal.component.html',
  styleUrls: ['./payment-portal.component.css']
})
export class PaymentPortalComponent implements OnInit {
  loggedUser: any;
  // paymentForm: FormGroup;
  constructor(
    private router: Router,
    private actRouter: ActivatedRoute,
    private userRepo: UserRepository,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private store: Store<RootReducerState>,
    private fb: FormBuilder
  ) { }
  paymentForm = this.fb.group({
    cardNumber: [null, [Validators.required, Validators.minLength(19)]],
    cardExp: [null, [Validators.required, Validators.minLength(4)]],
    cardCvv: [null, [Validators.required, Validators.minLength(3)]],
    cardHolderName: [null, [Validators.required, Validators.maxLength(40)]],
    isCardSave: [null, []]
  });
  get validation(): any {
    return this.paymentForm.controls;
  }
  ngOnInit() {
    this.userRepo.getLogedUser().subscribe((getStoreData) => {
      this.loggedUser = getStoreData;
      console.log(this.loggedUser);
    });
  }
  submitForm() {
    if (this.paymentForm.valid) {
      let usercards = {};
      usercards = Object.assign({ "cardNo": this.loggedUser.cards.length }, this.paymentForm.value)
      this.apiService.addCards(usercards).subscribe((res) => {
        this.store.dispatch(new UserSuccessAction(res));
        if (this.paymentForm.get('isCardSave').value == true) {
          this.notificationService.showNotification("success", "Your card saved successfully !!!");
        }
      })
    } else {
      return;
    }
  }
  showReview() {
    this.router.navigate(["cart/review"]);
  }
}
