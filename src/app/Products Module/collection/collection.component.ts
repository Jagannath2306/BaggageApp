import { Component, OnInit } from '@angular/core';
import { GetAllProductsService } from 'src/app/shared/Services/Products/Get All Products/get-all-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  all_Products;
  status = "loading";
  puma_Products: any;
  levis_Products:any;
  hm_Products: any;
  trends_Products: any;
  unlimited_Products: any;
  easybuy_Products: any;
  constructor(private service_products: GetAllProductsService,
              private route:Router) { }

  ngOnInit() {
    
   setTimeout(()=>{
    let url = ""
    this.service_products.getAllProducts("http://localhost:4000/api/pumalist?limit=8").subscribe((response)=> {
      this.puma_Products = response.slice(0,8); 
      this.status = "success";
    }, (response)=> {
      this.status = "success";
    });

    this.service_products.getAllProducts("http://localhost:4000/api/levislist").subscribe((response)=> {
      this.levis_Products = response.slice(0,8); 
      this.status = "success";
    }, (response)=> {
      this.status = "success";
    });

    this.service_products.getAllProducts("http://localhost:4000/api/trendslist").subscribe((response)=> {
      this.trends_Products = response.slice(0,8); 
      this.status = "success";
    }, (response)=> {
      this.status = "success";
    });

    this.service_products.getAllProducts("http://localhost:4000/api/unlimitedlist").subscribe((response)=> {
      this.unlimited_Products = response.slice(0,8); 
      this.status = "success";
    }, (response)=> {
      this.status = "success";
    });

    this.service_products.getAllProducts("http://localhost:4000/api/easybuylist").subscribe((response)=> {
      this.easybuy_Products = response.slice(0,8); 
      this.status = "success";
    }, (response)=> {
      this.status = "success";
    });

    this.service_products.getAllProducts("http://localhost:4000/api/hmlist").subscribe((response)=> {
      this.hm_Products = response.slice(0,8); 
      this.status = "success";
    }, (response)=> {
      this.status = "success";
    });

   },2000)
  }

  viewDetail(product){
    this.service_products.currProduct = product;
    this.route.navigate(["products/viewitems",product.id]);
}
  }
