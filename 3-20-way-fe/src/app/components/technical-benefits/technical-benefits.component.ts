import { Component, Input } from '@angular/core';
import { LandingPageService } from '../../services/landing-page.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-technical-benefits',
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './technical-benefits.component.html',
})
export class TechnicalBenefitsComponent {
  @Input() color: string = 'sky';
  @Input() technical_benefits: any = {};
  constructor() { }
}
