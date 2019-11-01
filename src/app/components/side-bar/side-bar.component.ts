import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuClose() {
    const close = document.getElementById('close_menu');
    const menu = document.getElementById('Menu');
    const icon = document.querySelector('#close_menu i');
    const content = document.getElementById('content');
    close.classList.toggle('close__menu__right');
    close.classList.toggle('color');
    icon.classList.toggle('icon-arrow-left2');
    icon.classList.toggle('icon-arrow-right2');
    menu.classList.toggle('Menu_remove');
    content.classList.toggle('header__content__full');
  }

  mobMenuOpen() {
    const mobIcon = document.getElementById('btn_nav');
    const mobNav = document.getElementById('mob_nav');
    mobIcon.classList.toggle('btnNavActive');
    mobNav.classList.toggle('mob_nav_open');
  }
}

