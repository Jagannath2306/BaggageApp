import { Component, OnInit } from '@angular/core';
import { GetAllProductsService } from 'src/app/shared/Services/Products/Get All Products/get-all-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-easybuy',
  templateUrl: './easybuy.component.html',
  styleUrls: ['./easybuy.component.css']
})
export class EasybuyComponent implements OnInit {
  all_Products;
  status = "loading";
  constructor(private service_products: GetAllProductsService,
              private route : Router) { }

  ngOnInit() {
    let url ="http://localhost:4000/api/easybuylist"
   setTimeout(()=>{
    this.service_products.getAllProducts(url).subscribe((response)=> {
      this.all_Products = response;
      this.status = "success";
    }, (response)=> {
      this.status = "error";
    })
   },2000)
  }


  viewDetail(product){
    this.service_products.currProduct = product;
      this.route.navigate(["products/viewitems",product.id]);
  }
}
