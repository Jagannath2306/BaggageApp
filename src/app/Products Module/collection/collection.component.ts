import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiProductsService } from 'src/app/shared/services/api-products-service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  products: any;
  service_products: any;
  constructor(
    private route: Router,
    private productService: ApiProductsService
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    }, () => {

    })
  }
  viewDetail(product) {
    this.route.navigate(["products/viewitems", product._id]);
  }
}
