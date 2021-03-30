import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/User";
import { HttpService } from "./http-service";

@Injectable()
export class ApiService {
    constructor(private httpService: HttpService) {
    }

    signup(body: any): Observable<User> {
        return this.httpService.post("/user/signup", body);
    }

    login(param?: any): Observable<User> {
        return this.httpService.get("/user/login", param);
    }
}