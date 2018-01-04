import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  categories = [
    { id: 1, title: 'cat1' },
    { id: 2, title: 'cat2' },
    { id: 3, title: 'cat3' }
  ]

  submit(x) {
    console.log('form :', x);
  }
}
