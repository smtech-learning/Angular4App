import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 @Input('isThisFavorite') isFavorite:boolean=true;

  onClick(){
 
    this.isFavorite= !this.isFavorite;
    console.log("Onclick is here");
  }

}
