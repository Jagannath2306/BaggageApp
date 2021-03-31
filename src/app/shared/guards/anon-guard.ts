import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "../services/api-service";

@Injectable()
export class AnonGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        // Converting token string to Boolean by adding !! to ApiService.getAuthToken()
        return !ApiService.getAuthToken();
    }
}