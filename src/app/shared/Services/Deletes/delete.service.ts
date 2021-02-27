import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { ProductsToDo } from '../Products/Get All Product ToDo/productsToDo';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http :HttpClient ) { }

  deleteIproduct(url:string,recivedata):Observable<ProductsToDo> {
 
      return this.http.post<ProductsToDo>(url,recivedata);
  }
}
