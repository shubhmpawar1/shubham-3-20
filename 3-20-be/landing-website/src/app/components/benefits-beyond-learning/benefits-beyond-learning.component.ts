import { Component, Input } from '@angular/core';
import { LandingPageService } from '../../services/landing-page.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-benefits-beyond-learning',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './benefits-beyond-learning.component.html',
})
export class BenefitsBeyondLearningComponent {

  @Input() color: string = 'sky';
  @Input() benefits_beyond_learning: any = [];
  constructor() { }

}