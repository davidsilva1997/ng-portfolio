import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ExperienceComponent } from "./experience/experience.component";
import { FormationComponent } from "./formation/formation.component";
import { ProjectsComponent } from "./projects/projects.component";
import { EducationComponent } from "./education/education.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ExperienceDetailComponent } from "./experience/experience-detail/experience-detail.component";
import { ExperienceStartComponent } from "./experience/experience-start/experience-start.component";

const appRoutes = [
    { path: '', component: HomeComponent },
    {
        path: 'experience',
        component: ExperienceComponent,
        children: [
            { path: '', component: ExperienceStartComponent },
            { path: ':id', component: ExperienceDetailComponent }
        ]
    },
    { path: 'education', component: EducationComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'formations', component: FormationComponent },
    { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
    { path: '**', redirectTo: '/not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }