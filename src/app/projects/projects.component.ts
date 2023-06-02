import { Component } from '@angular/core';
import { Projects } from './projectsInterface';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent {
    ProjectList:Projects[] = [
      {
        img:"../../assets/dictionary.png",
        skillsUsed:'ReactJs HTML CSS',
        name:'Dictionary Web app'
      },
      {
        img:"../../assets/dictionary.png",
        skillsUsed:'ReactJs HTML CSS',
        name:'Dictionary Web app'
      },
      {
        img:"../../assets/dictionary.png",
        skillsUsed:'ReactJs HTML CSS',
        name:'Dictionary Web app'
      },
      
    ]
}
