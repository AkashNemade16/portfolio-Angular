import { Component } from '@angular/core';
import {faLinkedin, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})

export class ContactFormComponent {
  constructor(private http:HttpClient){

  }
  faLinkedin = faLinkedin
  faGithub = faGithub
  faTwitter = faTwitter
  

  sendData =  (name:string,email:string,message:string) => {
    const user ={
      name,
      email,
      message
    }
    console.log(user)
    if(name!='' && email!='' && message!=''){
      this.http.post('http://localhost:3001/api/insert',user)
      .subscribe(res=>console.log(res))
    }
  }

  submit=(e:Event)=>{
    e.preventDefault
    this.sendData
  }
}
