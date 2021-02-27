import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private single_user = 'http://localhost:4000/api/singleUserUpdate';

  constructor(private http :HttpClient ) { }

  
  _UpdateService(url,data:any):Observable<void> {
    
        //return this.http.put<void>(`${url}/${id}`);
        return this.http.put<void>(url,data)
    }

  _updateSingleUser(data: any): Observable<void> {

    //return this.http.put<void>(`${url}/${id}`);
    return this.http.put<void>(`${this.single_user}`, data)
  }
}
