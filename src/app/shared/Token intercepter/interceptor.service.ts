import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { LoaderService } from './loader.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

    constructor(private injector: Injector,
        private loaderService: LoaderService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.isLoading.next(true);

        // let tokenizedreq = req.clone({
        //     setHeaders: {
        //         Authorization: `Bearer ${authService.getToken()}`
        //     }
        // })
        
        return next.handle(req).pipe(
            finalize(() => {
                this.loaderService.isLoading.next(false);
            })
        )
    }
}
