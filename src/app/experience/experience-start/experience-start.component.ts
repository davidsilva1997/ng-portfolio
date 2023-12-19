import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-experience-start',
  templateUrl: './experience-start.component.html',
  styleUrl: './experience-start.component.css'
})
export class ExperienceStartComponent implements OnInit {

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experienceService.setExperienceSelected(null);
  }
}
