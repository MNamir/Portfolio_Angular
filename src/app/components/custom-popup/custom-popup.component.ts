import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-popup',
  templateUrl: './custom-popup.component.html',
  styleUrls: ['./custom-popup.component.css']
})
export class CustomPopupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  modalClose() {
    const close = document.getElementById('close').closest('body');
    if (close.classList.contains('modal-open')) {
      const findBackDrop = document.querySelector('.modal-backdrop');
      close.classList.remove('modal-open');
      findBackDrop.remove();
    }
  }

  // -----------  NOTE -------------------------
  // Place this from where you want to call you modal and call the click there!!
  // modalOpen() {
  //   const x = document.getElementById('modal').closest('body');
  //   const backDrop = document.createElement('div');
  //   backDrop.classList.add('modal-backdrop');
  //   x.classList.add('modal-open');
  //   x.append(backDrop);
  //   backDrop.addEventListener('click', function f() {
  //     backDrop.remove();
  //     x.classList.remove('modal-open');
  //   });
  // }


}
