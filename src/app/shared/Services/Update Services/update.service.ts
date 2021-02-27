import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http :HttpClient ) { }

  
  _UpdateService(url,data:any):Observable<void> {
    
        //return this.http.put<void>(`${url}/${id}`);
        return this.http.put<void>(url,data)
    }
}
