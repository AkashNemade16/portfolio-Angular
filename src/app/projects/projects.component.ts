import { Component } from '@angular/core';
import { Projects } from './projectsInterface';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent {
  navigate = () => {
    document.getElementById('contactform')?.scrollIntoView({behavior:'smooth' })
  }
    ProjectList:Projects[] = [ 
      {
        img:"../../assets/dictionary.png",
        skillsUsed:'ReactJs HTML CSS',
        name:'Dictionary Web app',
        href:'https://dictionarywebapp.vercel.app/',
        gitLink:'https://github.com/AkashNemade16/dictionarywebapp'
      },
      {
        img:"../../assets/Portfolio.png",
        skillsUsed:'Angular HTML Sass',
        name:'Design Portfolio',
        href:'https://akashnemade.com/',
        gitLink:'https://github.com/AkashNemade16/portfolio-Angular'
      }
    ]
}
