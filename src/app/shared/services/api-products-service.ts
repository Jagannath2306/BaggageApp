import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { root } from "rxjs/internal-compatibility";
import { Product } from "../models/product";
import { HttpService } from "./http-service";

@Injectable({ providedIn: root })
export class ApiProductsService {
    constructor(
        private httpService: HttpService) {
    }

    getProducts(param?: any): Observable<any> {
        return this.httpService.get("/product/get/products", param);
    }
}