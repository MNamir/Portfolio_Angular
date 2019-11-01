import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit , OnChanges {
  constructor() { console.log('constructor called'); }

  ngOnInit() {
    console.log('ngoninit called');
  }

  ngOnChanges(changes: SimpleChanges)  {
    console.log(changes, 'ngonchanges called');
  }

  onSubmit(f: NgForm) {
  console.log(f.value);
  console.log(f.valid);
  }
}

