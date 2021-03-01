import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modules
import { SharedModule } from './shared/shared.module';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './Home Module/home/home.component';
import { HeaderComponent } from './Home Module/header/header.component';
import { FooterComponent } from './Home Module/footer/footer.component';
import { PageNotFoundComponent } from './Home Module/page-not-found/page-not-found.component';
import { routing } from './app-routing.module';
import { SpinnerComponent } from './Home Module/spinner/spinner.component';
import * as bootstrap from "bootstrap";
import * as $ from "jquery";
declare var thirdLib:any;


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    SpinnerComponent    
  ],
  imports: [
    BrowserModule,
    routing,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
