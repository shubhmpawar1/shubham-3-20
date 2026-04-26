import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-outcomes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './outcomes.component.html',
  styleUrl: './outcomes.component.css'
})
export class OutcomesComponent {
  @Input() outcomes_data: any;
}
