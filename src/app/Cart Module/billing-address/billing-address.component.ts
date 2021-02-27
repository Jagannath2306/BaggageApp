import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.css']
})
export class BillingAddressComponent implements OnInit {

  constructor(private router: Router,
    private actRouter: ActivatedRoute) { }

  ngOnInit() {
  }


  showPaymentPortal() {
    this.router.navigate(["cart/paymentPortal"]);
  }

}
