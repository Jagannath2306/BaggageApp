import { Component, OnInit } from '@angular/core';
// import { GetAllProductsService } from 'src/app/shared/Services/Products/Get All Products/get-all-products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {
  all_Products;
  status = "loading";
  constructor(
    // private service_products: GetAllProductsService,
              private route:Router) { }

  ngOnInit() {
  //   let url ="http://localhost:4000/api/trendslist"
  //  setTimeout(()=>{
  //   this.service_products.getAllProducts(url).subscribe((response)=> {
  //     this.all_Products = response;
  //     console.log(this.all_Products)
  //     this.status = "success";
  //   }, (response)=> {
  //     this.status = "success";
  //   })
  //  },2000)
  // }
  // viewDetail(product){
  //   this.service_products.currProduct = product;
  //   this.route.navigate(["products/viewitems",product.id]);
}

}
