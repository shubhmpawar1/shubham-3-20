import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-cta.component.html',
  styleUrl: './new-cta.component.css'
})
export class NewCtaComponent {
  @Input() new_cta_data: any;
}
