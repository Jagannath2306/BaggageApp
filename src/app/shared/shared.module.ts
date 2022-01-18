import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { InputButtomBorderedDirective } from './Shared Directives/input-buttom-bordered.directive';
import { HttpService } from './services/http-service'
import { ApiService } from './services/api-service';
import { AuthGuard } from './guards/auth-guard';
import { AnonGuard } from './guards/anon-guard';
import { UserRepository } from './Repositories/User-repo';
import { ApiProductsService } from './services/api-products-service';
import { ProductsRepository } from './Repositories/Products-repo';
import { InterceptorService } from './Token intercepter/interceptor.service';
import { CardFormatPipe } from './Pipes/card-format.pipe';
import { ExpireDateFormatPipe } from './Pipes/expire-date-format.pipe';



@NgModule({
  declarations: [InputButtomBorderedDirective, CardFormatPipe, ExpireDateFormatPipe],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    InputButtomBorderedDirective, CardFormatPipe,ExpireDateFormatPipe
  ],
  providers: [
    HttpService,
    ApiService,
    ApiProductsService,
    UserRepository,
    ProductsRepository,
    AuthGuard,
    AnonGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true
    }
  ]
})
export class SharedModule { }
