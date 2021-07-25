import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { combineLatest, Observable } from "rxjs";
import { UserRequestAction, UserSuccessAction } from "src/app/State Management/actions/user-action";
import { getUserdata, getUserLoaded, getUserLoading, RootReducerState } from "src/app/State Management/reducers";
import { User } from "../models/User";
import { ApiService } from "../services/api-service";

@Injectable()
export class UserRepository {
    constructor(
        private apiService: ApiService,
        private store: Store<RootReducerState>
    ) { }

    getLogedUser(force = false): Observable<any> {
        const loading$ = this.store.select(getUserLoading);
        const loaded$ = this.store.select(getUserLoaded);
        const getUserData = this.store.select(getUserdata);
        combineLatest([loading$, loaded$]).subscribe((data) => {
            if (!data[0] && !data[1] || force) {
                this.store.dispatch(new UserRequestAction());
                this.apiService.fatchUser().subscribe((res) => {
                    this.store.dispatch(new UserSuccessAction(res));
                });
            }
        });
        return getUserData;
    }
}