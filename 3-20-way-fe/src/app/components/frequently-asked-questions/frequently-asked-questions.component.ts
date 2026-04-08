import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LandingPageService } from '../../services/landing-page.service';

@Component({
  selector: 'app-frequently-asked-questions',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './frequently-asked-questions.component.html',
})
export class FrequentlyAskedQuestionsComponent {

  @Input() faqs: any = {};

  constructor() { }
  toggleFAQ(index: number) {
    this.faqs.details[index].expanded = !this.faqs.details[index]?.expanded;
  }
}
