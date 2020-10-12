import { Component, OnInit } from '@angular/core';
import{ EyeglassesService } from 'src/app/services/eyeglasses.service';
import { Eyeglasses } from 'src/app/models/eyeglasses';

@Component({
  selector: 'app-eyeglasses',
  templateUrl: './eyeglasses.component.html',
  styleUrls: ['./eyeglasses.component.css']
})
export class EyeglassesComponent implements OnInit {

  productList:Eyeglasses[] = []


  constructor(private eyeglassesService: EyeglassesService) { }

  ngOnInit(){
    this.productList = this.eyeglassesService.getProducts()
  }

}
