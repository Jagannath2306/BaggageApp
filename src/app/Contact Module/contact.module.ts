import { NgModule } from '@angular/core';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { routing } from './Contact.routing';

@NgModule({
  declarations: [ContactUsComponent, AboutUsComponent],
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  exports:[ContactUsComponent, AboutUsComponent]
})
export class ContactModule { }
