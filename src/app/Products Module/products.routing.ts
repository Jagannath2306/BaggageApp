import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
    },
    {
        path: "collection", component: CollectionComponent
    },
    {
        path: "easy-buy", component: EasybuyComponent
    },
    {
        path: "trends", component: TrendsComponent
    },
    {
        path: "hm", component: HmComponent
    },
    {
        path: "unlimited", component: UnlimitedComponent
    },
    {
        path: "levis", component: LevisComponent
    },
    {
        path: "puma", component: PumaComponent
    },
    {
        path: "viewitems/:id", component: ViewitemsComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);