import { NumberSymbol } from '@angular/common';

export class onlineexclusive {

    id:number;
    name:string;
    description:string;
    price:number;
    imageurlo:string;

    constructor(id,name,description,price=0,imageurl="") {

        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.imageurlo=imageurl;
     }
}
