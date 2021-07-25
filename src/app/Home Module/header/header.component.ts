import { Component, OnInit } from '@angular/core';
import { resolveDefinition } from '@angular/core/src/view/util';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/Notification/notification-service';
import { UserRepository } from 'src/app/shared/Repositories/User-repo';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItems: number;
  loggedUser: any;
  isUserlogged = false;
  constructor(
    private userRepo: UserRepository,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userRepo.getLogedUser().subscribe((getStoreData) => {
      if (Object.keys(getStoreData).length === 0 && getStoreData.constructor === Object) {
        this.isUserlogged = false;
        this.cartItems = 0;
      }
      else {
        this.isUserlogged = true;
        this.loggedUser = getStoreData;
        // this.cartItems = this.loggedUser.cart.lenght;
        this.cartItems = 0;
      }
    });
  }
  gotoCart() {
    if (this.isUserlogged) {
      this.router.navigate(['cart']);
    } else {
      this.router.navigate(['user']);
    }
  }
  Logout() {
    this.router.navigate(['user/logout']);
  }

}
