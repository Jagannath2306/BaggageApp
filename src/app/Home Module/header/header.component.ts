import { Component, OnInit } from '@angular/core';
import { resolveDefinition } from '@angular/core/src/view/util';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
// import { SubjectDataService } from 'src/app/shared/Services/subject-data.service';
// import { GetAllProductsService } from 'src/app/shared/Services/Products/Get All Products/get-all-products.service';
// import { UserAuthService } from '../../shared/User Auth/user-auth.service';
// import { GetSingleItemService } from 'src/app/shared/Services/Products/Get All Products/get-single-item.service';
import { NotificationService } from 'src/app/Notification/notification-service';
import { UserRepository } from 'src/app/shared/Repositories/User-repo';
import { ApiService } from 'src/app/shared/services/api-service';
import { UserRequestAction, UserSuccessAction } from 'src/app/State Management/actions/user-action';
import { getUserdata, getUserLoaded, getUserLoading, getUserState, RootReducerState } from 'src/app/State Management/reducers';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lenthData: number;
  cartedData: any;
  userInfo: any;
  loggedUser: any;
  isUserlogged = false;
  constructor(
    private userRepo: UserRepository,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.userRepo.getLogedUser().subscribe((getStoreData) => {
      if (Object.keys(getStoreData).length === 0 && getStoreData.constructor === Object) {
        this.isUserlogged = false;
      }
      else {
        this.isUserlogged = true;
        this.loggedUser = getStoreData;
      }
    });
  }

  // Logout() {
  //   this.apiService.logoutAndRemoveToken("auth token");
  // }

}
