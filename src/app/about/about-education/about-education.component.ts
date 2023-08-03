import { Component, Input } from '@angular/core';

@Component({
  selector: 'about-education',
  templateUrl: './about-education.component.html',
  styleUrls: ['./about-education.component.scss']
})
export class AboutEducationComponent {
@Input() collegeName : String = '';
@Input() collegeAddress : String = '';
@Input() collegeDate : String = '';
@Input() Designation : String = '';
}
