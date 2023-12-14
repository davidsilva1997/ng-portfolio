import { Component, OnInit } from '@angular/core';
import { Card } from './models/card.model';
import experienceData from './data/experience.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  experiences: any = experienceData;
  experienceCards: Card[] = [];

  ngOnInit(): void {
    console.log('Data', this.experiences);

    for (let experience of this.experiences){
      this.experienceCards.push(new Card(experience.role, experience.duration, experience.description, experience.companyImage, experience.company));
    }
  }


  cardExample: Card = new Card(
    'Full-Stack Developer', 
    '2010-2011', 
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate alias eius accusamus nostrum repellat ullam, corrupti est laboriosam ut obcaecati at nesciunt ratione aliquid, nam, asperiores dolores exercitationem consequatur dignissimos?', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHaJXj4ZVwBchHA-n8U-qVUKyac9wuiOk90f39nSaEDg8-mrQHDPVFQN6p54nrkuge8gg&usqp=CAU',
    'Main Software, Lda.'
  )
}
