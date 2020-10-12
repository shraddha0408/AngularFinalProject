import { Injectable } from '@angular/core';

import{Readingglasses} from '../models/Readingglasses';



@Injectable({
  providedIn: 'root'
})
export class RedingglassesService {
  products:Readingglasses[]=[

  new Readingglasses(1, 'vince-ace', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 1300,"../../assets/r4.jpg"),
  new Readingglasses(2, 'Aqulens ', 'VC E13051 -C2 Smartphone/ PC Eyeglasses', 2750,"../../assets/r7.jpg"),
  new Readingglasses(3, 'softlense', 'Golden Brown Grey Full Rim Square John Jacobs JJ Tints JJ S12962 - C1', 1200,"../../assets/r3.jpg"),
  new Readingglasses(4, 'Lconnect', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 4200,"../../assets/r6.jpg"),
  new Readingglasses(5, 'alkon', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 800,"../../assets/r5.jpg"),
  new Readingglasses(6, 'Optics', 'VC E13051 -C2 Smartphone/ PC Eyeglasses', 1333,"../../assets/r3.jpg"),
  new Readingglasses(7, 'Focus', 'Golden Brown Grey Full Rim Square John Jacobs JJ Tints JJ S12962', 1455,"../../assets/r7.jpg"),
  new Readingglasses(8, 'Acuvue', 'VC E13051 -C2 Smartphone/ P  C Eyeglasses', 2359,"../../assets/r9.jpg"),
  new Readingglasses(9, 'freshlook', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 1948,"../../assets/r1.jpg"),
   ]

  constructor() { }
  getProducts(): Readingglasses[] {
    
    return this.products
  }
 // getProducts1(): Product1[] {
    
 //   return this.products
 // }
}
