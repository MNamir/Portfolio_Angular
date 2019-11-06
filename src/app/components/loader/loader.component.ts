import { Component, OnInit , HostListener} from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @HostListener('window: load') onLoadEvent() {
    const body = document.querySelector('.animation-container-wrap');
    setTimeout(() => {
      body.classList.add('fadeOut');
    }, 2000);
  }

}
