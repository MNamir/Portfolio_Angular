import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit , OnChanges {
  userMailId = '';
  userMsg = '';
  userName = '';
  ngOnInit() {
    console.log('ngoninit called');
  }

  ngOnChanges(changes: SimpleChanges)  {
  }

  onSubmit(f: NgForm) {
  console.log(f.value);
  }
  getUserMailId(event: Event) {
    console.log(event);
    this.userMailId = ( event.target as HTMLInputElement).value;
  }
  getUserMsg() {
    this.userMsg = (document.getElementById('text_comment') as HTMLInputElement).value;
  }
}

