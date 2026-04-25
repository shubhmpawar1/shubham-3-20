import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-pricing.component.html',
  styleUrl: './new-pricing.component.css'
})
export class NewPricingComponent {
  @Input() pricing_data: any;
}
