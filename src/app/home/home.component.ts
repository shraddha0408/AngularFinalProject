import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homelogo:string="../../assets/logo3.jpeg";

  eyeglassesPath:string="../../assets/4.jpg";
  sunglassesPath:string="../../assets/5.jpg";
  phoneglassesPath:string="../../assets/p4.jpg";
  readingglassesPath:string="../../assets/r7.jpg";
  onlineexclusive:string="../../assets/1.jpg";

  marquee1:string="../../assets/nw1.jpg";
  marquee2:string="../../assets/nw2.jpg";
  marquee3:string="../../assets/nw3.jpg";
  marquee4:string="../../assets/nw4.jpg";


  slider1:string="../../assets/mypic.jpg";
  slider2:string="../../assets/mypic.jpg";
  slider3:string="../../assets/mypic.jpg";
  


  m1:string="../../assets/w1.jpg";
  m2:string="../../assets/w5.jpg";
  m3:string="../../assets/w3.jpg";
  m4:string="../../assets/w4.jpg";
  m5:string="../../assets/w2.jpg";
  m6:string="../../assets/w6.jpg";
  m7:string="../../assets/w7.jpg";
  m8:string="../../assets/w8.jpg";


  constructor() { }

  ngOnInit(): void {
  }

}
