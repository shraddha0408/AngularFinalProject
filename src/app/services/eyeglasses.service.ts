import { Injectable } from '@angular/core';

import{Eyeglasses} from '../models/Eyeglasses';



@Injectable({
  providedIn: 'root'
})
export class EyeglassesService {

  products:Eyeglasses[]=[
   new Eyeglasses(1, 'vince-ace', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 300,"../../assets/r4.jpg"),
    new Eyeglasses(2, 'Aqulens ', 'VC E13051 -C2 Smartphone/ PC Eyeglasses', 750,"../../assets/r7.jpg"),
    new Eyeglasses(3, 'softlense', 'Golden Brown Grey Full Rim Square John Jacobs JJ Tints JJ S12962 - C1', 3200,"../../assets/r3.jpg"),
    new Eyeglasses(4, 'Lconnect', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 1200,"../../assets/r6.jpg"),
    new Eyeglasses(5, 'alkon', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 4100,"../../assets/r5.jpg"),
    new Eyeglasses(6, 'Optics', 'VC E13051 -C2 Smartphone/ PC Eyeglasses', 1333,"../../assets/r3.jpg"),
    new Eyeglasses(7, 'Focus', 'Golden Brown Grey Full Rim Square John Jacobs JJ Tints JJ S12962', 1555,"../../assets/r7.jpg"),
    new Eyeglasses(8, 'Acuvue', 'VC E13051 -C2 Smartphone/ P  C Eyeglasses', 3659,"../../assets/r9.jpg"),
    new Eyeglasses(9, 'freshlook', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 1948,"../../assets/r1.jpg"),
   ]

  constructor() { }
  getProducts(): Eyeglasses[] {
    
    return this.products
  }
}
