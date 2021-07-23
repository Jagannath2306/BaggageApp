import { Component, OnInit } from '@angular/core';
import { resolveDefinition } from '@angular/core/src/view/util';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
// import { SubjectDataService } from 'src/app/shared/Services/subject-data.service';
// import { GetAllProductsService } from 'src/app/shared/Services/Products/Get All Products/get-all-products.service';
// import { UserAuthService } from '../../shared/User Auth/user-auth.service';
// import { GetSingleItemService } from 'src/app/shared/Services/Products/Get All Products/get-single-item.service';
import { NotificationService } from 'src/app/Notification/notification-service';
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
    private apiService: ApiService,
    private notificationService: NotificationService,
    private store: Store<RootReducerState>
  ) { }

  ngOnInit() {
    const loading$ = this.store.select(getUserLoading);
    const loaded$ = this.store.select(getUserLoaded);
    combineLatest([loading$, loaded$]).subscribe((data) => {
      if (!data[0] && !data[1]) {
        this.store.dispatch(new UserRequestAction());
        this.apiService.fatchUser().subscribe((res) => {
          this.store.dispatch(new UserSuccessAction(res));
        });
      }
    })
    this.store.select(getUserdata).subscribe((getStoreData) => {
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
