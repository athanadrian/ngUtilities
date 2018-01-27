import { Component, Input } from '@angular/core';
import { expandCollapse } from 'app/animations/zippy-animations';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [
    expandCollapse
  ]
})
export class ZippyComponent {

  @Input('title') title: string = "Shipping Address";

  isExpanded = false;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
