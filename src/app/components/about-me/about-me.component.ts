import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  oddNumber = [1, 3, 5, 7, 9];
  evenNumber = [2, 4, 6, 8, 10];
  onlyOdd = false;
  constructor() { }

  ngOnInit() {
  }

}
