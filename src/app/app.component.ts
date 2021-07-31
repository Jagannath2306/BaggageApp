import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoaderService } from './shared/Token intercepter/loader.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    public loaderService: LoaderService
  ) { }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
}  
}
