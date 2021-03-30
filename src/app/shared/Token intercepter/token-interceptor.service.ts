import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
// import { UserAuthService } from '../User Auth/user-auth.service'
// @Injectable({
//   providedIn: 'root'
// })
// export class TokenInterceptorService implements HttpInterceptor {

//   constructor(private injector: Injector) { }
//   intercept(req, next) {
//     let authService = this.injector.get(UserAuthService)
//     let tokenizedreq = req.clone({
//       setHeaders: {
//         Authorization: `Bearer ${authService.getToken()}`
//       }
//     })
//     return next.handle(tokenizedreq);
//   }
// }
