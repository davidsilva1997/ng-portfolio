import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css'
})
export class ProjectsListComponent implements OnInit {
  projects: Project[];

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  onSelectProject(id: number) {
    this.router.navigate(['/projects/', id]);
  }
}
