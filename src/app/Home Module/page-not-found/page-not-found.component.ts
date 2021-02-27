import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {} from

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }
  nav() {
    this.router.navigate(['contact/contact-us'])
  }
}
