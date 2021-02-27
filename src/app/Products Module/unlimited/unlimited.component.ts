import { Component, OnInit } from '@angular/core';
import { GetAllProductsService } from 'src/app/shared/Services/Products/Get All Products/get-all-products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-unlimited',
  templateUrl: './unlimited.component.html',
  styleUrls: ['./unlimited.component.css']
})
export class UnlimitedComponent implements OnInit {
  all_Products;
  status = "loading";
  constructor(private service_products: GetAllProductsService,
              private route:Router) { }

  ngOnInit() {
    let url ="http://localhost:4000/api/levislist"
   setTimeout(()=>{
    this.service_products.getAllProducts(url).subscribe((response)=> {
      this.all_Products = response;
      console.log(this.all_Products)
      this.status = "success";
    }, (response)=> {
      this.status = "success";
    })
   },2000)
  }
  viewDetail(product){
    this.service_products.currProduct = product;
    this.route.navigate(["products/viewitems",product.id]);
}

}
