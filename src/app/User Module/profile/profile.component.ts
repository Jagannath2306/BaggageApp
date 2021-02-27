import { Component, OnInit } from '@angular/core';
import { PostServicesService } from 'src/app/shared/Services/Post Services/post-services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
singleUser:any;
  status: string;
  constructor(private postSer : PostServicesService) { }

  ngOnInit() {
    let data = JSON.parse(localStorage.getItem("user"));
    this.postSer.postServices("http://localhost:4000/api/singleUser",data).subscribe((response)=> {
      this.singleUser = response ;
      this.status = "success";
    }, (response)=> {
      this.status = "success";
    });
  }

}
