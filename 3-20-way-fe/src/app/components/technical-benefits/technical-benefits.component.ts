import { Component, Input } from '@angular/core';
import { LandingPageService } from '../../services/landing-page.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-technical-benefits',
  imports: [NgFor],
  templateUrl: './technical-benefits.component.html',
})
export class TechnicalBenefitsComponent {
  @Input() color: string = 'sky';
  @Input() technical_benefits: any = {};
  constructor() { }
}
