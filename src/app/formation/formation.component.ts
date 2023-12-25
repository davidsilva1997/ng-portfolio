import { Component, OnInit } from '@angular/core';
import { Formation } from './formation.model';
import { FormationService } from './formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css',
  providers: [FormationService]
})
export class FormationComponent implements OnInit {
  formations: Formation[];

  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.formations = this.formationService.getFormations();
  }
}
