import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-child',
  templateUrl: './project-child.component.html',
  styleUrls: ['./project-child.component.scss']
})
export class ProjectChildComponent {
  @Input() project_Name : String = ""
  @Input() project_Description : String = ""
  @Input() tech_stack : String = ""

}
