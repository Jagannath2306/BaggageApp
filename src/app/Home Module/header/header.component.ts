import { Component, OnInit } from '@angular/core';
import { SubjectDataService } from 'src/app/shared/Services/subject-data.service';
import { GetAllProductsService } from 'src/app/shared/Services/Products/Get All Products/get-all-products.service';
import { UserAuthService } from '../../shared/User Auth/user-auth.service';
import { GetSingleItemService } from 'src/app/shared/Services/Products/Get All Products/get-single-item.service';

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
    private userAuth: UserAuthService,
    private singleItem: GetSingleItemService) {

  }

  ngOnInit() {
    let data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      this.singleItem.getSingleItem(data).subscribe((res: any) => {
        if (res.user.name) {
          this.userInfo = data ? res.user.name : '';
        } else {
          alert("data not there")
        }
      });
    }
    
    this.subService.subject.subscribe((resp) => this.lenthData = resp);

  }

  Logout() {
    this.userAuth.logoutUser();
  }

}
