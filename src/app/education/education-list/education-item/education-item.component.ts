import { Component, Input, OnInit } from '@angular/core';
import { Education } from '../../education.model';
import { Card } from '../../../models/card.model';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrl: './education-item.component.css'
})
export class EducationItemComponent implements OnInit {
  @Input('education') education: Education;
  @Input('id') id: number;
  card: Card;

  ngOnInit(): void {
    this.card = new Card(
      this.education.id,
      this.education.course,
      this.education.startDate + ' - ' + this.education.endDate,
      this.education.school,
      this.education.schoolImage,
      this.education.school
    );
  }
}
