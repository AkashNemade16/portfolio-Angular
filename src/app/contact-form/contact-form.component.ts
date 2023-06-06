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
  email:string = 'aksh.akash@gmail.com'
  encodedEmail:any=encodeURIComponent(this.email)
  url:any = `https://formsubmit.co/${this.encodedEmail}`
  data:any
  constructor(private http:HttpClient){

  }
  faLinkedin = faLinkedin
  faGithub = faGithub
  faTwitter = faTwitter
  
  //submit(){
    // console.log('form submitted',form)
    // if(form['value'].name && form['value'].email && form['value'].message ){
    //   // this.http.post('http://localhost:3001/api/insert',form['value'])
    //   // .subscribe(()=> {this.alert=false}) 
    //   this.http.post('"https://formsubmit.co/aksh.akash@gmail.com" ',form['value'])
      
    // }
    //   form.reset()

  //}
}
