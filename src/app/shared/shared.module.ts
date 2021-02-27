import { NgModule } from '@angular/core';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { InputButtomBorderedDirective } from './Shared Directives/input-buttom-bordered.directive';
import { GetAllProductsService } from './Services/Products/Get All Products/get-all-products.service';
import { UserAuthService } from './User Auth/user-auth.service';
import { AuthGuard } from './Auth Guard/auth.guard';
import { TokenInterceptorService } from './Token intercepter/token-interceptor.service';
import { UpdateService } from './Services/Update Services/update.service';





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
    GetAllProductsService,
    UserAuthService,
    AuthGuard,
    UpdateService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ]
})
export class SharedModule { }
