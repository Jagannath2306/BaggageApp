import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiProductsService } from 'src/app/shared/services/api-products-service';
import { NgxImgZoomService } from "ngx-img-zoom";
import { ApiService } from 'src/app/shared/services/api-service';
import { UserRepository } from 'src/app/shared/Repositories/User-repo';
import { RootReducerState } from 'src/app/State Management/reducers';
import { UserSuccessAction } from 'src/app/State Management/actions/user-action';
import { Store } from '@ngrx/store';
import { NotificationService } from 'src/app/Notification/notification-service';
@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {

  enableZoom: Boolean = true;
  previewImageSrc: any;
  zoomImageSrc: any;
  product: any;
  productName: any;
  productTitle: any;
  productRating: any;
  productSold: any;
  productPrice: any;
  productPriceOnOffer: any;
  productQty: any;
  productInStock: any;
  isAddedToCart = true;
  cartItems: any;


  constructor(private router: Router,
    private actRouter: ActivatedRoute,
    private apiProductsService: ApiProductsService,
    private ngxImgZoomService: NgxImgZoomService,
    private apiService: ApiService,
    private store: Store<RootReducerState>,
    private userRepo: UserRepository,
    private notificationService: NotificationService,
  ) {
    this.ngxImgZoomService.setZoomBreakPoints([
      { w: 100, h: 100 },
      { w: 150, h: 150 },
      { w: 200, h: 200 },
      { w: 250, h: 250 },
      { w: 300, h: 300 }
    ]);
  }

  ngOnInit() {
    this.actRouter.paramMap.subscribe((param) => {
      this.apiProductsService.getProduct({ _id: param.get("id") }).subscribe((res) => {
        this.product = res;
        this.productName = this.product.itemName || "";
        this.productTitle = this.product.itemTitle || "";
        this.productRating = this.product.itemRatting || "";
        this.productSold = this.product.itemSold || "";
        this.productPrice = this.product.itemPrice || "";
        this.productPriceOnOffer = this.product.itemPriceOnOffer || "";
        this.productQty = this.product.itemQuality || "";
        this.productInStock = this.product.itemInStock || "";
        this.previewImageSrc = this.product.itemImage;
        this.zoomImageSrc = this.product.itemImage;

        this.userRepo.getLogedUser().subscribe((getStoreData) => {
          this.cartItems = getStoreData.cart;
          this.cartItems.forEach(element => {
            if (element._id == param.get("id")) {
              console.log(element._id)
              this.isAddedToCart = false;
            }
          });
        })
      }, (e) => { })
    });

  }

  addToCart() {
    this.apiService.addToCart(this.product).subscribe((res) => {
      this.store.dispatch(new UserSuccessAction(res));
      this.notificationService.showNotification("success", `Item added to Cart`)
      this.isAddedToCart = false;
    }, () => {
      this.isAddedToCart = true;
      this.notificationService.showNotification("error", 'Something went wrong, Please try again..');
    })
  }
  showCart(){
    this.router.navigate(['cart']);
  }
}