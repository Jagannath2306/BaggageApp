import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { InputButtomBorderedDirective } from './Shared Directives/input-buttom-bordered.directive';
import { HttpService } from './services/http-service'
import { ApiService } from './services/api-service';
// import { TokenInterceptorService } from './Token intercepter/token-interceptor.service';



@NgModule({
  declarations: [InputButtomBorderedDirective],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    InputButtomBorderedDirective
  ],
  providers: [
    HttpService,
    ApiService
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass:TokenInterceptorService,
    //   multi:true
    // }
  ]
})
export class SharedModule { }
