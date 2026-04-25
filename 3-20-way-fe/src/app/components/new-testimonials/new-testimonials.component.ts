import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-testimonials.component.html',
  styleUrl: './new-testimonials.component.css'
})
export class NewTestimonialsComponent {
  @Input() testimonials_data: any;
}
