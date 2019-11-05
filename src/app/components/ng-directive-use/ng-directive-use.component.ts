import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-directive-use',
  templateUrl: './ng-directive-use.component.html',
  styleUrls: ['./ng-directive-use.component.css']
})
export class NgDirectiveUseComponent implements OnInit {
  firstName = '';
  lastName = '';
  email = '';
  mobileNo = '';
  submitTrigger = false;
  storefirstName = '';
  storelastName = '';
  storeemail = '';
  storemobileNo = '';
  color = 'Offline';
  cardName = ['Mohammad Affan', 'Mohammad Namir', 'kushal Nagi'];
  constructor() {
    this.color = Math.random() > 0.5 ? 'active' : 'offline';
  }

  ngOnInit() {
  }
  onSubmit() {
    this.storefirstName = this.firstName.valueOf();
    this.storelastName = this.lastName.valueOf();
    this.storeemail = this.email.valueOf();
    this.storemobileNo = this.mobileNo.valueOf();
    this.submitTrigger = true;
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.mobileNo = '';
    console.log('submit' + this.color);
    console.log('random no.' + Math.random());
    this.cardName.push();
  }
  getColor() {
    console.log(this.color);
    return this.color === 'active' ? 'green' : 'red';
  }
}
