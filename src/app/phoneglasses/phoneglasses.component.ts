import { Component, OnInit } from '@angular/core';
import{PhoneglassesService} from 'src/app/services/phoneglasses.service';
import { Phoneglasses } from 'src/app/models/phoneglasses';

@Component({
  selector: 'app-phoneglasses',
  templateUrl: './phoneglasses.component.html',
  styleUrls: ['./phoneglasses.component.css']
})
export class PhoneglassesComponent implements OnInit {

  productList:Phoneglasses[] = []


  constructor(private PhoneglassesService: PhoneglassesService) { }

  ngOnInit(){
    this.productList = this.PhoneglassesService.getProducts()
  }

}
