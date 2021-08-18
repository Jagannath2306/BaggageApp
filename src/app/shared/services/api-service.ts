import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { letProto } from "rxjs-compat/operator/let";
import { root } from "rxjs/internal-compatibility";
import { map } from "rxjs/operators";
import { User } from "../models/User";
import { AuthUtils } from "../utility/auth-utils";
import { HttpService } from "./http-service";

@Injectable({ providedIn: root })
export class ApiService {
    constructor(private httpService: HttpService) {
    }

    signup(body: any): Observable<User> {
        return this.httpService.post("/user/signup", body);
    }

    loginAndSetToken(param?: any): Observable<User> {
        return this.httpService.get("/user/login", param).pipe(map((res) => {
            AuthUtils.setAuthToken(res.token);
            return res.user;
        }));
    }
    logoutAndRemoveToken(param?: any) {
        AuthUtils.removeAuthToken(param);
    }
    sendResetPasswordEmail(param?: any): Observable<any> {
        return this.httpService.get("/user/reset/password", param);
    }

    resetPassword(body: any): Observable<any> {
        return this.httpService.patch("/user/reset/password", body);
    }
    updatePassword(body: any): Observable<any> {
        return this.httpService.patch("/user/update/password", body);
    }
    updateProfile(body: any): Observable<any> {
        return this.httpService.patch("/user/update/profile", body);
    }

    updateProfilePicture(body: any): Observable<any> {
        let formData: any = new FormData();
        formData.append('profilePhoto', body);
        return this.httpService.patch("/user/update/profilePic", formData);
    }
    addToCart(body: any): Observable<any> {
        return this.httpService.patch("/user/update/cart", body);
    }
    deleteCart(param?: any): Observable<any> {
        return this.httpService.delete("/user/update/cart/delete", param);
    }
    orders(body: any): Observable<any> {
        return this.httpService.patch("/user/update/orders", body);
    }
    fatchUser(param?: any): Observable<User> {
        return this.httpService.get("/user/fatch");
    }
}