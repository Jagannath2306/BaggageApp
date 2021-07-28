import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { GetAllProductsService } from 'src/app/shared/Services/Products/Get All Products/get-all-products.service';
import { HttpClient } from '@angular/common/http'
// import { AddtoCartService } from '../../shared/Services/addto-cart.service'
// import { SubjectDataService } from 'src/app/shared/Services/subject-data.service';
// import {UpdateService} from "../../shared/Services/Update Services/update.service"
@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {

  Iproduct = [];
  id;
  cartItem: any;
  modelTitle: string;
  price: number;
  onOffer: number;
  qty: number;
  isValid: boolean;
  cartedData: any;
  SubjectDataService: any;
  count_data: any;
  model_box: boolean;
  route: any;


  constructor(private router: Router,
    private actRouter: ActivatedRoute,
    private httpost: HttpClient,
     ) {



  }

  ngOnInit() {

    this.actRouter.paramMap.subscribe((param) => {
      this.id = +param.get("id");
      alert(this.id)
      let path = "http://localhost:4000/api/unlimitedlist/";
      let para = this.id;
      let url = path.concat(para);
      this.service_products.getAllProducts(url).subscribe((response) => {
        this.Iproduct = response;
        this.cartItem = this.Iproduct[0];
        // console.log(this.cartItem)
        this.modelTitle = this.cartItem.name;
        this.price = this.cartItem.price;
        this.onOffer = this.cartItem.priceOnOffer;
        this.qty = this.cartItem.quality;
        this.model_box = false;
      })
    });

  //   this.Iproduct.push(this.service_products.currProduct)
  //   this.cartItem = this.Iproduct[0];
  //       // console.log(this.cartItem)
  //       this.modelTitle = this.cartItem.name;
  //       this.price = this.cartItem.price;
  //       this.onOffer = this.cartItem.priceOnOffer;
  //       this.qty = this.cartItem.quality;
  //       this.model_box = false;
  // }


  // addToCart() {
  //   let user = JSON.parse(localStorage.getItem("user"));
  //   let update_data = [this.cartItem,user];
    
  //   let _url = "http://localhost:4000/api/userCart"
  //   this.putService._UpdateService(_url,update_data).subscribe((res)=>{
  //     //$("#modelSucc").modal('show');
      
  //   },(err)=>{
  //     $("#modelSucc").modal('show');
  //   })
  // }

  // showCart() {
  //   this.router.navigate(["cart"]);
  //   // Bootstrap model
  //   $("#modelErr").modal('hide');
  //   $("#modelSucc").modal('hide');

  // }
}
}