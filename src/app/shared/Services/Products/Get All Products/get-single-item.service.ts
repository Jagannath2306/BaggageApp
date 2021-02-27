import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetSingleItemService {

  constructor(private http: HttpClient) { }

  getSingleItem(item) {
    return this.http.get(`http://localhost:4000/api/singleUser?email=${item.email}`);
  }
}
