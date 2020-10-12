import { Component, OnInit } from '@angular/core';
import{SunglassesService} from 'src/app/services/sunglasses.service';
import { Sunglasses } from 'src/app/models/sunglasses';
import{PhoneglassesService} from 'src/app/services/phoneglasses.service';
@Component({
  selector: 'app-sunglasses',
  templateUrl: './sunglasses.component.html',
  styleUrls: ['./sunglasses.component.css']
})
export class SunglassesComponent implements OnInit {
  
  
  productList:Sunglasses[] = []


 constructor(private SunglassesService: SunglassesService) { }


  ngOnInit(): void {
  }

}
