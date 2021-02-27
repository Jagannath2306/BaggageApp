import { Component, OnInit } from '@angular/core';
import { GetAllProductsService } from 'src/app/shared/Services/Products/Get All Products/get-all-products.service';
import { DeleteService } from 'src/app/shared/Services/Deletes/delete.service';
import { SubjectDataService } from 'src/app/shared/Services/subject-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AddtoCartService } from 'src/app/shared/Services/addto-cart.service';
@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  CartProducts: any;
  status: any;
  lenthData: number;
  totalAmount = 0;
  disAmount = 0;
  count_data: any;
  recivedData: any;
  update_data = [];
  constructor(private service_products: GetAllProductsService,
    private delete_item: DeleteService,
    private subService: SubjectDataService,
    private router: Router,
    private actRouter: ActivatedRoute,
    private addServices: AddtoCartService) { }

  ngOnInit() {
    let data = JSON.parse(localStorage.getItem("user"));
    this.addServices.AddCart(data).subscribe((res) => {
      this.recivedData = res;
      console.log(this.recivedData[0].cart)
      this.CartProducts = this.recivedData[0].cart;
      this.count_data = this.recivedData[0].cart.length;

      // service call for updated value of count_data.
      this.subService.cartCount(this.count_data);

      //for total amout
      this.totalAmount =0;
      this.CartProducts.forEach((element) => {
        this.totalAmount += parseInt(element.price)
      });
      this.disAmount = this.totalAmount * 15 /100;

    })
  }


  removeItem(product: any) {
    // alert(product.name)
    // this.delete_item.deleteIproduct(product.id).subscribe(() => {

    // Success section
    //   let url = "http://localhost:3000/myCart";
    //   this.service_products.getAllProducts(url).subscribe((response) => {
    //     this.CartProducts = response;
    //   });
    //   this.count_data = this.CartProducts.length;
    //   this.subService.cartCount(this.count_data - 1);
    // })
    // Bootstrap model closing
    // $("#modelErr").modal('hide');

    // service call for updated value of count_data.
    //   this.subService.subject.subscribe((resp) => this.count_data = resp);
    //console.log("in my cart"+ product)
    let user = JSON.parse(localStorage.getItem("user"));
    let sendData = [product, user];

    // console.log("remove function "+this.update_data)
    let url = 'http://localhost:4000/api/deleteUserCart';
    this.delete_item.deleteIproduct(url, sendData).subscribe((res) => {

      ///////////Updating Items after delete ////////////////

      let data = JSON.parse(localStorage.getItem("user"));
      this.addServices.AddCart(data).subscribe((res) => {
        this.recivedData = res;
        this.CartProducts = this.recivedData[0].cart;
        this.count_data = this.recivedData[0].cart.length;


        this.totalAmount =0;
        this.CartProducts.forEach((element) => {
          this.totalAmount += parseInt(element.price)
        });
        this.disAmount = this.totalAmount * 15 /100;
        // service call for updated value of count_data.

        this.subService.cartCount(this.count_data);
      });

     

    });
  }

  placeOrder() {
    this.router.navigate(["cart/billingAddress"]);
  }

}
