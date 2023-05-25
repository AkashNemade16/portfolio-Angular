import { Component } from '@angular/core';
import {faLinkedin, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./Header.component.sass']
})
export class HeaderComponent {
  faLinkedin = faLinkedin
  faGithub = faGithub
  faTwitter = faTwitter
}
