import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsRepository } from 'src/app/shared/Repositories/Products-repo';

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
    private productsRepository: ProductsRepository
  ) { }

  ngOnInit() {
    this.productsRepository.getProducts().subscribe((getStoreData) => {
      this.products = getStoreData;
    })
  }
  viewDetail(product) {
    this.route.navigate(["products/viewitems", product._id]);
  }
}
