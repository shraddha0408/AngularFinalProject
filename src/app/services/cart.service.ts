import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  subject=new Subject();

  constructor() { }

  sendMsg(product)  {

  this.subject.next(product)

  }

  getMsg(){

     return this.subject.asObservable()
    
  }
}
