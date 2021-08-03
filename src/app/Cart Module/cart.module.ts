import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCartComponent } from './my-cart/my-cart.component';
import { SharedModule } from '../shared/shared.module';
import { routing } from './Cart.routing';
import { BillingAddressComponent } from './billing-address/billing-address.component';
import { PaymentPortalComponent } from './payment-portal/payment-portal.component';
import { ReviewComponent } from './review/review.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [MyCartComponent, BillingAddressComponent, PaymentPortalComponent, ReviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    routing
  ],
  exports:[MyCartComponent]
})
export class CartModule { }
