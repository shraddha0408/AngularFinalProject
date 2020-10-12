import { Component, OnInit } from '@angular/core';
import{OnlineexclusiveService} from 'src/app/services/onlineexclusive.service';
import { onlineexclusive } from 'src/app/models/Onlineexclusive';

@Component({
  selector: 'app-onlineexclusive',
  templateUrl: './onlineexclusive.component.html',
  styleUrls: ['./onlineexclusive.component.css']
})
export class OnlineexclusiveComponent implements OnInit {

  productList:onlineexclusive[] = []


  constructor(private OnlineexclusiveService: OnlineexclusiveService) { }

  ngOnInit(){
    this.productList = this.OnlineexclusiveService.getProducts()
  }

}
