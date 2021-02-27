import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserToDo } from './UserTodo';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private _registerUrl = 'http://localhost:4000/api/register';
  private _loginUrl = 'http://localhost:4000/api/login';
  private single_user = 'http://localhost:4000/api/singleUser';

  constructor(private http: HttpClient,
              private _router : Router) { }

  // for user register or sign up start

  registerUser(user: UserToDo): Observable<any> {
    console.log(user)
    return this.http.post<UserToDo>(`${this._registerUrl}`, user);
  }
  // for user register or sign up end

  // for user validation or login start

  validateUser(user: any): Observable<any> {
    return this.http.post<any>(`${this._loginUrl}`, user);

  }

  // for user validation or login end
  getSingleUser(user: any) {
    return this.http.post(`${this.single_user}`, user);
  }

  // for loged in stay

  loggedin() {
    return !!localStorage.getItem('token');
  }
logoutUser() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  this._router.navigate(['user/logout']);
}
  getToken() {
    return localStorage.getItem('token');
  }
}
