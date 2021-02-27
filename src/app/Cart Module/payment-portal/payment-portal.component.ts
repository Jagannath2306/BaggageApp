import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-portal',
  templateUrl: './payment-portal.component.html',
  styleUrls: ['./payment-portal.component.css']
})
export class PaymentPortalComponent implements OnInit {

  constructor(private router: Router,
    private actRouter: ActivatedRoute) { }

  ngOnInit() {
  }

  showReview() {
    this.router.navigate(["cart/review"]);
  }
}
