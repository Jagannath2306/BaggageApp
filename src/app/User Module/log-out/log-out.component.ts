import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotificationService } from 'src/app/Notification/notification-service';
import { ApiService } from 'src/app/shared/services/api-service';
import { UserSuccessAction } from 'src/app/State Management/actions/user-action';
import { RootReducerState } from 'src/app/State Management/reducers';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private apiService: ApiService,
    private notificationService: NotificationService,
    private store: Store<RootReducerState>) { }

  ngOnInit() {
    this.apiService.logoutAndRemoveToken("auth token");
    this.store.dispatch(new UserSuccessAction({}));
  }

}
