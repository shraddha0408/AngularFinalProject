import { Injectable } from '@angular/core';

import{onlineexclusive} from '../models/Onlineexclusive';



@Injectable({
  providedIn: 'root'
})
export class OnlineexclusiveService {

  products:onlineexclusive[]=[
  
    new onlineexclusive(1, 'vince-ace', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 300,"../../assets/ol1.jpg"),
    new onlineexclusive(2, 'Aqulens ', 'VC E13051 -C2 Smartphone/ PC Eyeglasses', 750,"../../assets/ol2.jpg"),
    new onlineexclusive(3, 'softlense', 'Golden Brown Grey Full Rim Square John Jacobs JJ Tints JJ S12962 - C1', 3200,"../../assets/ol3.jpg"),
    new onlineexclusive(4, 'Lconnect', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 1200,"../../assets/nw1.jpg"),
    new onlineexclusive(5, 'alkon', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 4100,"../../assets/r5.jpg"),
    new onlineexclusive(6, 'Optics', 'VC E13051 -C2 Smartphone/ PC Eyeglasses', 1333,"../../assets/r3.jpg"),
    new onlineexclusive(7, 'Focus', 'Golden Brown Grey Full Rim Square John Jacobs JJ Tints JJ S12962', 1555,"../../assets/nw2.jpg"),
    new onlineexclusive(8, 'Acuvue', 'VC E13051 -C2 Smartphone/ P  C Eyeglasses', 3659,"../../assets/r9.jpg"),
    new onlineexclusive(9, 'freshlook', 'Gunmetal Black Full Rim Square Vincent Chase Steel Escobar', 1948,"../../assets/nw3.jpg"),
   ]

  constructor() { }
  getProducts(): onlineexclusive[] {
    
    return this.products
  }
 
}
