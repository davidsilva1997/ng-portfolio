import { Component, OnInit } from '@angular/core';
import { EducationService } from '../education.service';

@Component({
  selector: 'app-education-start',
  templateUrl: './education-start.component.html',
  styleUrl: './education-start.component.css'
})
export class EducationStartComponent implements OnInit {

  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
    this.educationService.setSelectedEducation(null);
  }
}
