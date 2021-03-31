import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCartComponent } from './my-cart/my-cart.component';
import { BillingAddressComponent } from './billing-address/billing-address.component';
import { PaymentPortalComponent } from './payment-portal/payment-portal.component';
import { ReviewComponent } from './review/review.component';
import { AuthGuard } from '../shared/guards/auth-guard';


const routes: Routes = [
    {
        path: '', component: MyCartComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'billingAddress', component: BillingAddressComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'paymentPortal', component: PaymentPortalComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'review', component: ReviewComponent,
        canActivate: [AuthGuard]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);