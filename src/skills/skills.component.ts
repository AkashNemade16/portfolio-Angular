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
      experience:"4 years of experience"
    },
    {
      skill:"CSS",
      experience:"4 years of experience"
    },
    {
      skill:"ReactJs",
      experience:"4 years of experience"
    },
    {
      skill:"Accessibility",
      experience:"4 years of experience"
    },
    {
      skill:"Javascript",
      experience:"4 years of experience"
    },
    {
      skill:"Angular",
      experience:"1 year of experience"
    },
  ]
}
