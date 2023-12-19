import { Component, OnInit } from '@angular/core';
import { Experience } from '../experience.model';
import { ExperienceService } from '../experience.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrl: './experience-detail.component.css'
})
export class ExperienceDetailComponent implements OnInit {
  experience: Experience;

  constructor(private experienceService: ExperienceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const id = +params['id'];

        this.experience = this.experienceService.getExperience(id);

        if (!this.experience){
          this.router.navigate(['/experience']);
        }

        this.experienceService.setExperienceSelected(id);
      }
    )
  }
}
