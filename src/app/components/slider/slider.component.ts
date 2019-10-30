import { Component, OnInit } from '@angular/core';
import { OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 300,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: false
  }

  constructor() { }

  ngOnInit() {
  }

}
