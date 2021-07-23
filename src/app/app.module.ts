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
import { NotificationService } from './Notification/notification-service';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { SpinnerComponent } from './Home Module/spinner/spinner.component';
import * as bootstrap from "bootstrap";
import * as $ from "jquery";
import { StoreModule } from '@ngrx/store';
import { rootReducer } from 'src/app/State Management/reducers';

declare var thirdLib: any;

/**
 * Custom angular notifier options
 */
const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'middle',
      distance: 24
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 3000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

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
    NotifierModule.withConfig(customNotifierOptions),
    StoreModule.forRoot(rootReducer)
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
