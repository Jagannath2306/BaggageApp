import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnonGuard } from '../shared/guards/anon-guard';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
    {
        path: '', component: AboutUsComponent,
        canActivate: [AnonGuard]
    },

    {
        path: "contact-us", component: ContactUsComponent,
        canActivate: [AnonGuard]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);