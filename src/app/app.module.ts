import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponentComponent } from './shared/card-component/card-component.component';
import { HeaderComponent } from './header/header.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormationComponent } from './formation/formation.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './app-routing.model';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ExperienceListComponent } from './experience/experience-list/experience-list.component';
import { ExperienceItemComponent } from './experience/experience-list/experience-item/experience-item.component';
import { ExperienceDetailComponent } from './experience/experience-detail/experience-detail.component';
import { ExperienceStartComponent } from './experience/experience-start/experience-start.component';
import { EducationListComponent } from './education/education-list/education-list.component';
import { EducationItemComponent } from './education/education-list/education-item/education-item.component';
import { EducationStartComponent } from './education/education-start/education-start.component';
import { EducationDetailComponent } from './education/education-detail/education-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponentComponent,
    HeaderComponent,
    ExperienceComponent,
    FormationComponent,
    EducationComponent,
    ProjectsComponent,
    HomeComponent,
    ErrorPageComponent,
    ExperienceListComponent,
    ExperienceItemComponent,
    ExperienceDetailComponent,
    ExperienceStartComponent,
    EducationListComponent,
    EducationItemComponent,
    EducationStartComponent,
    EducationDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
