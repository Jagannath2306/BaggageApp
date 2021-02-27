import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserToDo } from '../../User Auth/UserTodo';

@Injectable({
  providedIn: 'root'
})
export class PostServicesService {

  constructor(private http :HttpClient) { }

  postServices(url:string,recivedata):Observable<UserToDo>{
    return this.http.post<UserToDo>(url,recivedata);
  }
}
