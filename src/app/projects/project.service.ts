import { Injectable } from "@angular/core";
import { Project } from "./project.model";

@Injectable({ providedIn: 'root' })
export class ProjectService {
    private projects: Project[] = [
        new Project(
            1,
            'Recipe Book',
            'Angular App to manage recipes and shopping list. Course project from Udemy formation.',
            'assets/projects/angular.png',
            [],
            ['Angular'],
            'https://github.com/davidsilva1997/angular-course-project',
            null
        ),
        new Project(
            2,
            'Portfolio',
            'David Silva personal portfolio made with Angular.',
            'assets/projects/angular.png',
            [],
            ['Angular'],
            'https://github.com/davidsilva1997/ng-portfolio',
            null
        ),
        new Project(
            3,
            'MSGDIST',
            'MSGDIST is a message management and redistribution system made in the C language.',
            'assets/projects/c.png',
            [],
            ['C'],
            'https://github.com/davidsilva1997/MSGDIST',
            'https://www.youtube.com/embed/GjRX0WGMefQ'
        ),
        new Project(
            4,
            'SGEA',
            'SGEA is a set of programs developed in C using the Win32 API that allows simulating an airspace management system.',
            'assets/projects/c.png',
            [],
            ['C', 'Win32 API'],
            'https://github.com/davidsilva1997/SGEA',
            'https://www.youtube.com/embed/vlxLFu9PihI'
        )
    ]

    getProjects(): Project[] {
        return this.projects.slice();
    }

    getProject(id: number): Project {
        const project = this.projects.find(find => (find.id === id));

        return project;
    }
}