import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigatechildfirst',
  templateUrl: './navigatechildfirst.component.html',
  styleUrls: ['./navigatechildfirst.component.css']
})
export class NavigatechildfirstComponent implements OnInit {
  myVar = '';
  constructor() { }

  ngOnInit() {
  }
  selectVal(val) {
    console.log(val.target.valueOf());
  }
}
