import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../models/User";
import { HttpService } from "./http-service";

@Injectable()
export class ApiService {
    private static authToken = 'auth token';
    constructor(private httpService: HttpService) {
    }
    static getAuthToken() {
        return localStorage.getItem(ApiService.authToken);
    }
    static setAuthToken(token) {
        localStorage.setItem(ApiService.authToken, token);
    }
    static removeAuthToken() {
        localStorage.removeItem(ApiService.authToken);
    }
    
    signup(body: any): Observable<User> {
        return this.httpService.post("/user/signup", body);
    }

    loginAndSetToken(param?: any): Observable<User> {
        return this.httpService.get("/user/login", param).pipe(map((res) => {
            ApiService.setAuthToken(res.token);
            return res.user;
        }));
    }

    sendResetPasswordEmail(param?: any) {
        return this.httpService.get("/user/reset/password", param);
    }

    resetPassword(body: any) {
        return this.httpService.patch("/user/reset/password", body);
    }
}