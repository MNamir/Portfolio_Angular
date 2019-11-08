import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {
  loadedComponent = 'Home';
  constructor() { }

  ngOnInit() {
  }
  getMenu(text) {
    const value = text.target.innerHTML;
    const elementSibling = text.target.parentElement.children;
    const element = text.target;
    this.loadedComponent = value;
    let i;
    for (i = 0; i < elementSibling.length; i++) {
      elementSibling[i].classList.remove('active');
    }
    element.classList.add('active');
  }

}
