import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-section',
  imports: [],
  templateUrl: './pricing-section.component.html',
})
export class PricingSectionComponent {
  
    @Input() color: string = 'sky';
}
