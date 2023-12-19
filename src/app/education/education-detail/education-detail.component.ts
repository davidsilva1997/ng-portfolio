import { Component, OnInit } from '@angular/core';
import { Education } from '../education.model';
import { EducationService } from '../education.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrl: './education-detail.component.css'
})
export class EducationDetailComponent implements OnInit {
  education: Education;
  years: number[];
  semesters: number[];

  constructor(private educationService: EducationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const id = +params['id'];

        this.education = this.educationService.getEducation(id);

        if (!this.education){
          this.router.navigate(['/education']);
        }

        const distinctYears = Array.from(new Set(this.education.curricularUnits.map(curricularUnit => curricularUnit.year)));
        const distinctSemesters = Array.from(new Set(this.education.curricularUnits.map(curricularUnit => curricularUnit.semester)));

        this.years = this.sortArray(distinctYears);
        this.semesters = this.sortArray(distinctSemesters);
      }
    )
  }

  private sortArray(array) {
    const sortedArray = array.sort((a, b) => a - b);

    return sortedArray;
  }
}
