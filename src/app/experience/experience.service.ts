import { Injectable } from "@angular/core";
import { Experience } from "./experience.model";

@Injectable()
export class ExperienceService {
    private experiences: Experience[] = [
        new Experience(
            1,
            'Main Software, Lda',
            '../../assets/mainsoftware.jpeg',
            'Full Stack Developer Internship',
            'December 2022',
            'September 2023',
            [
                'RESTful Web API using ASP.NET Web API',
                'Front-end development with AngularJS framework and SQL DevExpress components',
                'SQL database management with Entity Framework',
                'Team Foundation Server for version control',
                'Creation of Windows Services'
            ],
            ['C#', '.NET', 'REST API', 'SQL', 'LINQ QUERIES', 'Entity Framework', 'HTML', 'Javascript', 'AngularJS']
        ),
        new Experience(
            2,
            'Main Software, Lda',
            '../../assets/mainsoftware.jpeg',
            'Software Developer Internship',
            'March 2022',
            'July 2022',
            [
                'Design and implementation of a solution that allows automatization of the application update process',
                'Microsoft Azure Blob Storage'
            ],
            ['C#', '.NET']
        ),
        new Experience(
            3,
            'Câmara Municipal de Penacova',
            '../../assets/cmpenacova.png',
            'Web Developer Internship',
            'March 2018',
            'July 2018',
            [
                'Implementation of a ticket system for service queues'
            ],
            ['HTML', 'CSS', 'Javascript']
        )
    ]

    getExperiences(): Experience[] {
        return this.experiences.slice();
    }

    getExperience(id: number): Experience {
        const experience = this.experiences.find(find => (find.id === id));

        return experience;
    }
}