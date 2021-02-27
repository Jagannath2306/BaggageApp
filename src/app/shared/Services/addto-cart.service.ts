import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsToDo } from './Products/Get All Product ToDo/productsToDo';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AddtoCartService {
  cartItem: any;
   path = "http://localhost:4000/api/getuserCart";

  constructor( private httpost:HttpClient) { }


  AddCart(data):Observable<void>{
    console.log(data)
      //  let path = "https://localhost:3000/myCart";
       return this.httpost.post<void>(`${this.path}`,data);
    
     };
}
