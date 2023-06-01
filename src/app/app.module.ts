import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../Header/Header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
