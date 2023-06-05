import { Component } from '@angular/core';
import {faLinkedin, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})

export class ContactFormComponent {
  alert:boolean = true
  constructor(private http:HttpClient){

  }
  faLinkedin = faLinkedin
  faGithub = faGithub
  faTwitter = faTwitter
  
  submit(form:NgForm){
    console.log('form submitted',form)
    if(form['value'].name && form['value'].email && form['value'].message ){
      this.http.post('http://localhost:3001/api/insert',form['value'])
      .subscribe(()=> {this.alert=false})  
    }
  
      form.reset()
    
    
  }
}
