import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserRepository } from 'src/app/shared/Repositories/User-repo';
import { NotificationService } from 'src/app/Notification/notification-service';
import { ApiService } from 'src/app/shared/services/api-service';
import { Store } from '@ngrx/store';
import { RootReducerState } from 'src/app/State Management/reducers';
import { UserSuccessAction } from 'src/app/State Management/actions/user-action';
@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  public CartProducts: any;
  status: any;
  lenthData: number;
  totalAmount = 0;
  disAmount = 0;
  count_data: any;
  userData: any;
  update_data = [];
  constructor(
    private router: Router,
    private actRouter: ActivatedRoute,
    private userRepo: UserRepository,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private store: Store<RootReducerState>
  ) { }

  ngOnInit() {

    this.userRepo.getLogedUser().subscribe((getStoreData) => {
      this.userData = getStoreData;
      this.CartProducts = this.userData.cart;
      this.totalAmount = 0;
      this.disAmount = 0;
      this.CartProducts.map((element) => {
        const totalPrice = element.itemPrice;
        const itemDescPrice = element.itemPrice * 15 / 100
        const totalDiscPrice = totalPrice - element.itemPrice * 15 / 100;
        const totalQwty = element.itemQuality;
        const discPrice = 0;
        this.setTotalAmountPlus(totalDiscPrice, totalQwty, totalPrice, discPrice);
        this.setTotaldisAmountPlus(totalPrice);
      });
    })
  }

  incQty(item) {
    this.CartProducts = this.CartProducts.map((element, index) => {
      if (element._id == item._id) {
        if (element.itemQuality < 3) {
          element.itemQuality = element.itemQuality + 1;
          const totalPrice = element.itemPrice;
          const discPrice = totalPrice - element.itemPrice * 15 / 100;
          const totalQwty = element.itemQuality;
          const totalDiscPrice = discPrice * totalQwty
          this.setTotalAmountPlus(totalDiscPrice, totalQwty, totalPrice, discPrice);
          this.setTotaldisAmountPlus(totalPrice)
        } else {
          this.notificationService.showNotification("error","Item can't more then 3 !!!");
        }
      }
      return element;
    });
  }
  desQty(item) {
    this.CartProducts = this.CartProducts.map(element => {
      if (element._id == item._id) {
        if (element.itemQuality > 1) {
          element.itemQuality = element.itemQuality - 1;
          const totalPrice = element.itemPrice;
          const discPrice = totalPrice - element.itemPrice * 15 / 100;
          const totalQwty = element.itemQuality;
          const totalDiscPrice = discPrice * totalQwty;
          this.setTotalAmountMinus(totalDiscPrice, totalQwty, totalPrice, discPrice);
          this.setTotaldisAmountMinus(totalPrice);
        } else {
        this.notificationService.showNotification("error","Item can't less then 0 !!!");
        }
      }
      return element;
    });
  }
  setTotalAmountPlus(totalDiscPrice, totalQwty, totalPrice, discPrice) {
    const rest = discPrice * (totalQwty - 1);
    this.totalAmount += totalDiscPrice - rest;
  }
  setTotalAmountMinus(totalDiscPrice, totalQwty, totalPrice, discPrice) {
    this.totalAmount -= discPrice;
  }
  setTotaldisAmountPlus(totalPrice) {
    if (totalPrice > 1) {
      this.disAmount += totalPrice * 15 / 100;
    }
  }
  setTotaldisAmountMinus(totalPrice) {
    this.disAmount -= totalPrice * 15 / 100;
  }

  removeItem(product: any) {
    this.apiService.deleteCart(product).subscribe((res) => {
      this.store.dispatch(new UserSuccessAction(res));
    }, (err) => { })
  }

  placeOrder() {
    this.router.navigate(["cart/billingAddress"]);
  }

}
