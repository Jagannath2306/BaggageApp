import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { ProductsToDo } from "../Get All Product ToDo/productsToDo"
@Injectable({
  providedIn: 'root'
})
export class GetAllProductsService {
  // Sending current product to viewitems compmnent
  currProduct;
  constructor(private http: HttpClient) { }

      getAllProducts(url): Observable<ProductsToDo[]> {
     
        return this.http.get<ProductsToDo[]>(url);
      };
   }
