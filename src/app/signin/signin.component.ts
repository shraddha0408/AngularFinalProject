import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  model: any = {}

  constructor() { }

  ngOnInit(): void {
  }
  login() {
    console.log(this.model)
  }

}
