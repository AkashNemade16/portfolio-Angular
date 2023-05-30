import { Component } from '@angular/core';
import { Skills } from './skillsInterface';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent {
  skillList:Skills[] = [
    {
      skill:"HTML",
      experience:"4 years"
    },
    {
      skill:"CSS",
      experience:"4 years"
    },
    {
      skill:"ReactJs",
      experience:"4 years"
    },
    {
      skill:"Accessibility",
      experience:"4 years"
    },
    {
      skill:"Angular",
      experience:"1 year"
    },
  ]
}
