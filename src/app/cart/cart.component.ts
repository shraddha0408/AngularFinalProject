import { Component, OnInit } from '@angular/core';
import {Phoneglasses} from 'src/app/models/phoneglasses';
import {CartService} from 'src/app/services/cart.service';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [

  ];
  cartTotal = 0


  constructor(private msg:CartService) { }

  ngOnInit(){
  
    this.msg.getMsg().subscribe((product: Phoneglasses) => {
      this.addProductToCart(product)
    
    })
  }
 
  addProductToCart(product: Phoneglasses) {

    let productExists = false

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++
        productExists = true
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }
   
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}
