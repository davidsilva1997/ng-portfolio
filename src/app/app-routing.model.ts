import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ExperienceComponent } from "./experience/experience.component";
import { FormationComponent } from "./formation/formation.component";
import { ProjectsComponent } from "./projects/projects.component";
import { EducationComponent } from "./education/education.component";

const appRoutes = [
    { path: 'experience', component: ExperienceComponent },
    { path: 'education', component: EducationComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'formations', component: FormationComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}