import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnonGuard } from '../shared/guards/anon-guard';
import { CollectionComponent } from './collection/collection.component';
import { EasybuyComponent } from './easybuy/easybuy.component';
import { HmComponent } from './hm/hm.component';
import { LevisComponent } from './levis/levis.component';
import { PumaComponent } from './puma/puma.component';
import { TrendsComponent } from './trends/trends.component';
import { UnlimitedComponent } from './unlimited/unlimited.component';
import { ViewitemsComponent } from './viewitems/viewitems.component';
// import { ViewitemsComponent } from './viewitems/viewitems.component';



const routes: Routes = [
    {
        path: '', component: CollectionComponent,
        canActivate: [AnonGuard]
    },
    {
        path: "collection", component: CollectionComponent,

    },
    {
        path: "easy-buy", component: EasybuyComponent,
        canActivate: [AnonGuard]
    },
    {
        path: "trends", component: TrendsComponent,
        canActivate: [AnonGuard]
    },
    {
        path: "hm", component: HmComponent,
        canActivate: [AnonGuard]
    },
    {
        path: "unlimited", component: UnlimitedComponent,
        canActivate: [AnonGuard]
    },
    {
        path: "levis", component: LevisComponent,
        canActivate: [AnonGuard]
    },
    {
        path: "puma", component: PumaComponent,
        canActivate: [AnonGuard]
    },
    {
        path: "viewitems/:id", component: ViewitemsComponent,
        canActivate: [AnonGuard]
    }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);