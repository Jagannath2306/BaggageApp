import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiProductsService } from 'src/app/shared/services/api-products-service';
@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {

  product: any;
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
  _id: any;
  Iproduct: any;

  myThumbnail = "https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg";
  myFullresImage = "https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";
  constructor(private router: Router,
    private actRouter: ActivatedRoute,
    private apiProductsService: ApiProductsService,
     ) {



  }

  ngOnInit() {
    this.actRouter.paramMap.subscribe((param) => {
      this.apiProductsService.getProduct({ _id: param.get("id") }).subscribe((res) => {
        this.product = res;
        this.Iproduct = res;
        this.cartItem = res;
        console.log(this.cartItem)
        this.modelTitle = this.cartItem.itemName;
        this.price = this.cartItem.itemPrice;
        this.onOffer = this.cartItem.itemPriceOnOffer;
        this.qty = this.cartItem.itemQuality;
        this.model_box = false;
      }, (e) => { })
    });
    // this.actRouter.paramMap.subscribe((param) => {
    //   this.id = +param.get("id");

    //   this.service_products.getAllProducts(url).subscribe((response) => {
    //     this.Iproduct = response;
    //     this.cartItem = this.Iproduct[0];
    //     // console.log(this.cartItem)
    //     this.modelTitle = this.cartItem.name;
    //     this.price = this.cartItem.price;
    //     this.onOffer = this.cartItem.priceOnOffer;
    //     this.qty = this.cartItem.quality;
    //     this.model_box = false;
    //   })
    // });

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