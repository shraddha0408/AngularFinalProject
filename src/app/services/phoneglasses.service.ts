import { Injectable } from '@angular/core';

import{Phoneglasses} from '../models/Phoneglasses';
//import{Phoneglasses} from '../models/product1';



@Injectable({
  providedIn: 'root'
})
export class PhoneglassesService {

  products:Phoneglasses[]=[
    new Phoneglasses(1, 'vince-ace', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 4300,"../../assets/r4.jpg"),
    new Phoneglasses(2, 'Aqulens ', 'VC E13051 -C2 Smartphone/ PC Eyeglasses', 1750,"../../assets/r7.jpg"),
    new Phoneglasses(3, 'softlense', 'Golden Brown Grey Full Rim Square John Jacobs JJ Tints JJ S12962 - C1', 5200,"../../assets/r4.jpg"),
    new Phoneglasses(4, 'Lconnect', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 1200,"../../assets/r6.jpg"),
    new Phoneglasses(5, 'alkon', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 4100,"../../assets/r5.jpg"),
    new Phoneglasses(6, 'Optics', 'VC E13051 -C2 Smartphone/ PC Eyeglasses', 1333,"../../assets/r4.jpg"),
    new Phoneglasses(7, 'Focus', 'Golden Brown Grey Full Rim Square John Jacobs JJ Tints JJ S12962', 4555,"../../assets/r7.jpg"),
    new Phoneglasses(8, 'Acuvue', 'VC E13051 -C2 Smartphone/ P  C Eyeglasses', 3659,"../../assets/r9.jpg"),
    new Phoneglasses(9, 'freshlook', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 3948,"../../assets/r1.jpg"),
   ]

  constructor() { }
  getProducts(): Phoneglasses[] {
    
    return this.products
  }
 // getProducts1(): Product1[] {
    
 //   return this.products
 // }
}
