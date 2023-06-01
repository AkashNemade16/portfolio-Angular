import { Component } from '@angular/core';
import {faLinkedin, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent {
  faLinkedin = faLinkedin
  faGithub = faGithub
  faTwitter = faTwitter
}
