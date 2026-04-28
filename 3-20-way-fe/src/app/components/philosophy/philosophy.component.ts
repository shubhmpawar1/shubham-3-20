import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-philosophy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './philosophy.component.html',
  styleUrl: './philosophy.component.css'
})
export class PhilosophyComponent {
  @Input() philosophy_data: any;
}
