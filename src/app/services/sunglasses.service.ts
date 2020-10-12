import { Injectable } from '@angular/core';

import{Sunglasses} from '../models/Sunglasses';



@Injectable({
  providedIn: 'root'
})
export class SunglassesService {

  products:Sunglasses[]=[
    new Sunglasses(1, 'vince-ace', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 300,"../../assets/4.jpg"),
    new Sunglasses(2, 'Aqulens ', 'VC E13051 -C2 Smartphone/ PC Eyeglasses', 750,"../../assets/7.jpg"),
    new Sunglasses(3, 'softlense', 'Golden Brown Grey Full Rim Square John Jacobs JJ Tints JJ S12962 - C1', 3200,"../../assets/3.jpg"),
    new Sunglasses(4, 'Lconnect', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 1200,"../../assets/6.jpg"),
    new Sunglasses(5, 'alkon', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 4100,"../../assets/5.jpg"),
    new Sunglasses(6, 'Optics', 'VC E13051 -C2 Smartphone/ PC Eyeglasses', 1333,"../../assets/3.jpg"),
    new Sunglasses(7, 'Focus', 'Golden Brown Grey Full Rim Square John Jacobs JJ Tints JJ S12962', 1555,"../../assets/7.jpg"),
    new Sunglasses(8, 'Acuvue', 'VC E13051 -C2 Smartphone/ P  C Eyeglasses', 3659,"../../assets/9.jpg"),
    new Sunglasses(9, 'freshlook', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 1948,"../../assets/1.jpg"),
   ]

  constructor() { }
  getProducts(): Sunglasses[] {
    
    return this.products
  }
}
