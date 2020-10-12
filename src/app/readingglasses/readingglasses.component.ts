import { Component, OnInit } from '@angular/core';
import{RedingglassesService} from 'src/app/services/readingglasses.service';
import { Readingglasses } from 'src/app/models/readingglasses';

@Component({
  selector: 'app-readingglasses',
  templateUrl: './readingglasses.component.html',
  styleUrls: ['./readingglasses.component.css']
})
export class ReadingglassesComponent implements OnInit {
  
 
  productList:Readingglasses[] = []


  constructor(private ReadingglassesService: RedingglassesService) { }

  ngOnInit(): void {
  }

}
