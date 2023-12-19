import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../../experience.model';
import { Card } from '../../../models/card.model';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.css'
})
export class ExperienceItemComponent implements OnInit {
  @Input('experience') experience: Experience;
  @Input('id') id: number;
  @Input('selected') selected: boolean = false;
  card: Card;

  ngOnInit(): void {
    this.card = new Card(
      this.experience.id,
      this.experience.role,
      this.experience.startDate + ' - ' + this.experience.endDate,
      this.experience.company,
      this.experience.companyImage,
      this.experience.company
    );
  }
}
