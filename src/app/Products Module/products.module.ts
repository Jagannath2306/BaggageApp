import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection/collection.component';
import { PumaComponent } from './puma/puma.component';
import { LevisComponent } from './levis/levis.component';
import { TrendsComponent } from './trends/trends.component';
import { UnlimitedComponent } from './unlimited/unlimited.component';
import { EasybuyComponent } from './easybuy/easybuy.component';
import { HmComponent } from './hm/hm.component';
import { ViewitemsComponent } from './viewitems/viewitems.component';
import { routing } from './products.routing';
import {ImageZoomModule} from 'angular2-image-zoom';


@NgModule({
  declarations: [
    CollectionComponent,
    PumaComponent,
    LevisComponent,
    TrendsComponent,
    UnlimitedComponent,
    EasybuyComponent,
    HmComponent,
    ViewitemsComponent],
  imports: [
    CommonModule,
    routing,
    ImageZoomModule
  ],
  exports:[ViewitemsComponent]
})
export class ProductsModule { }
