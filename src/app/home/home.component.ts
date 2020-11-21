import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from "../home-service.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeServiceService :HomeServiceService) { }
  data: Array<any>;
  backupData: Array<any>;
  items = [];
  pageOfItems: Array<any>;
  imageData: any;
  errorMessage: String;
  searchData: String;
  getData() {
    this.homeServiceService.getData().subscribe(
      data => this.data= data,
      error => this.errorMessage = <any>error
    )
  }
  getImage() {
    this.homeServiceService.getImages().subscribe(
      imageData => {this.imageData= imageData
        this.backupData = imageData},
      error => this.errorMessage = <any>error
    )
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
  ngOnInit() {
    this.getData();
    this.getImage();
  }

}
