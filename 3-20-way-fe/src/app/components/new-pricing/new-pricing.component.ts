import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-pricing',
  imports: [CommonModule],
  templateUrl: './new-pricing.component.html',
  styleUrl: './new-pricing.component.css'
})
export class NewPricingComponent {
  @Input() pricing_data: any;
}
