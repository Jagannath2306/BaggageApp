import { Component, OnInit } from '@angular/core';
import { SubjectDataService } from 'src/app/shared/Services/subject-data.service';
import { GetAllProductsService } from 'src/app/shared/Services/Products/Get All Products/get-all-products.service';
import { UserAuthService } from '../../shared/User Auth/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lenthData: number;
  cartedData: any;
  userInfo: any;
  constructor(private subService: SubjectDataService,
    private serviceProducts: GetAllProductsService,
    private userAuth: UserAuthService) {

  }

  ngOnInit() {
    // Service call for initial value

    // let path = "http://localhost:3000/myCart"

    // this.serviceProducts.getAllProducts(path).subscribe((response) => {
    //   this.cartedData = response;
    //   this.lenthData = this.cartedData.length;
    // })

    // For Single User info start

    // this.userAuth.getSingleUser(JSON.parse(localStorage.getItem('user'))).subscribe((res) => {
    //     this.userInfo = res;
    // } );

    this.subService.subjectName.subscribe((res) => console.log(this.userInfo = res));
    // For Single User info End
    // service call for updated value

    this.subService.subject.subscribe((resp) => this.lenthData = resp);
    // alert("header" + this.lenthData);
  }
  Logout() {
    this.userAuth.logoutUser();
  }

}
