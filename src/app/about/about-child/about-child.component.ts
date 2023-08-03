import { Component, Input } from '@angular/core';

@Component({
  selector: 'about-child',
  templateUrl: './about-child.component.html',
  styleUrls: ['./about-child.component.scss']
})
export class AboutChildComponent {
  @Input() companyName : String = '';
  @Input() companyAddress : String = '';
  @Input() experienceDate : String = '';

}
