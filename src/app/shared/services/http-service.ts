import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { NotificationService } from 'src/app/Notification/notification-service';
import { Observable, throwError } from 'rxjs'
import { User } from "../models/User";
@Injectable()
export class HttpService {
    private baseURL = "http://localhost:4000/api"
    constructor(private httpClient: HttpClient,
        private notificationService: NotificationService) {
    }

    get(url: string, paramData?: any): Observable<any> {
        const data = { params: paramData };
        return this.httpClient.get(this.baseURL + url, data).pipe(catchError(this.errorHandler.bind(this)));
    }

    post(url: string, body: User): Observable<any> {
        return this.httpClient.post<User>(this.baseURL + url, body,).pipe(catchError(this.errorHandler.bind(this)));
    }
    
    patch(url: string, body: User): Observable<any> {
        return this.httpClient.patch<User>(this.baseURL + url, body,).pipe(catchError(this.errorHandler.bind(this)));
    }

    private errorHandler(res: any) {
        const error = res.error;
        console.log(error);
        const keys = Object.keys(error);
        const key = keys[0];
        let message = error[key];
        const status = res.status;

        if (status === 401) {
            //need to logout user , bcz section expire; and redirect to login
        }
        if (error[key] instanceof Array) {
            message = error[key][0];
            console.log(message)
        }
        if (key === 'isTrusted') {
            this.notificationService.showNotification("error", 'Please check you internet connection..!!');
        } else {
            this.notificationService.showNotification("error", message);
        }
        return throwError({ "message": message, error: error });
    }
}