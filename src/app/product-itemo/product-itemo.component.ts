import { Component, OnInit,Input} from '@angular/core';
import {Phoneglasses} from 'src/app/models/phoneglasses';
import {Eyeglasses} from 'src/app/models/eyeglasses';
//import { onlineexclusive } from 'src/app/models/onlineexclusive';
import {Sunglasses} from 'src/app/models/sunglasses';
import {Readingglasses} from 'src/app/models/readingglasses';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-product-itemo',
  templateUrl: './product-itemo.component.html',
  styleUrls: ['./product-itemo.component.css']
})
export class ProductItemoComponent implements OnInit {


  @Input() productItem: Phoneglasses;
  @Input() productIteme: Eyeglasses;
 // @Input() productInemo:onlineexclusive; 
  @Input() productInemr:Readingglasses; 
  @Input() productInems:Sunglasses; 

  constructor(private msg: CartService) { }


  ngOnInit(): void {
  

  }
handleAddToCart() {
    this.msg.sendMsg(this.productItem)
    window.alert('Your product has been added to the cart!');
  

    
  }
}
