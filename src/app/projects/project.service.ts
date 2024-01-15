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
            [
                'assets/projects/recipe-book/01.png',
                'assets/projects/recipe-book/02.png',
                'assets/projects/recipe-book/03.png',
                'assets/projects/recipe-book/04.png',
                'assets/projects/recipe-book/05.png',
                'assets/projects/recipe-book/06.png'
            ],
            ['Angular'],
            'https://github.com/davidsilva1997/angular-course-project',
            null,
            'https://ng--course-project.web.app/auth'
        ),
        new Project(
            2,
            'Portfolio',
            'David Silva personal portfolio made with Angular.',
            'assets/projects/angular.png',
            [],
            ['Angular'],
            'https://github.com/davidsilva1997/ng-portfolio',
            null,
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
            'https://www.youtube.com/embed/GjRX0WGMefQ',
            null
        ),
        new Project(
            4,
            'SGEA',
            'SGEA is a set of programs developed in C using the Win32 API that allows simulating an airspace management system.',
            'assets/projects/c.png',
            [],
            ['C', 'Win32 API'],
            'https://github.com/davidsilva1997/SGEA',
            'https://www.youtube.com/embed/vlxLFu9PihI',
            null
        ),
        new Project(
            5,
            'Money Flow Tracker',
            'The Money Flow Tracker is a web application built using the Angular framework that helps users manage and visualize their financial transactions seamlessly. With an intuitive and user-friendly interface, this application allows users to input income and expenses, categorize transactions, and monitor their overall financial health.',
            'assets/projects/angular.png',
            [
                'assets/projects/money-flow-tracker/01.png',
                'assets/projects/money-flow-tracker/02.png',
                'assets/projects/money-flow-tracker/03.png',
                'assets/projects/money-flow-tracker/04.png',
                'assets/projects/money-flow-tracker/05.png',
                'assets/projects/money-flow-tracker/06.png',
                'assets/projects/money-flow-tracker/07.png',
                'assets/projects/money-flow-tracker/08.png',
            ],
            ['Angular'],
            'https://github.com/davidsilva1997/ng-money-flow-tracker',
            null,
            'https://ng--money-flow-tracker.web.app/'
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