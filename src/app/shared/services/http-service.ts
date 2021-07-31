import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { NotificationService } from 'src/app/Notification/notification-service';
import { Observable, throwError } from 'rxjs'
import { User } from "../models/User";
import { ApiService } from "./api-service";
import { AuthUtils } from "../utility/auth-utils";
import { Router } from "@angular/router";
@Injectable()
export class HttpService {
    private baseURL = "http://localhost:4000/api"
    constructor(private httpClient: HttpClient,
        private notificationService: NotificationService,
        private router: Router) {
    }

    get(url: string, param?: any): Observable<any> {
        const paramData = { params: param, headers: this.getAuthHeaders() };
        return this.httpClient.get(this.baseURL + url, paramData).pipe(catchError(this.errorHandler.bind(this)));
    }

    post(url: string, body: User): Observable<any> {
        return this.httpClient.post<User>(this.baseURL + url, body, { headers: this.getAuthHeaders() }).pipe(catchError(this.errorHandler.bind(this)));
    }
    
    patch(url: string, body: User): Observable<any> {
        return this.httpClient.patch<User>(this.baseURL + url, body, { headers: this.getAuthHeaders() }).pipe(catchError(this.errorHandler.bind(this)));
    }

    delete(url: string, param?: any): Observable<any> {
        const paramData = { params: param, headers: this.getAuthHeaders() };
        return this.httpClient.delete(this.baseURL + url, paramData).pipe(catchError(this.errorHandler.bind(this)));
    }

    private getAuthHeaders() {
        return {
            Authorization: `Bearer ${AuthUtils.getAuthToken()}`
        }
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
            this.notificationService.showNotification("error", 'Session Expired !!');
            this.router.navigate(['user']);
        }
        if (error[key] instanceof Array) {
            message = error[key][0];
        }
        if (key === 'isTrusted') {
            this.notificationService.showNotification("error", 'Please check you internet connection..!!');
        } else {
            this.notificationService.showNotification("error", message);
        }
        return throwError({ "message": message, error: error });
    }
}