import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professional-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './professional-background.component.html',
  styleUrl: './professional-background.component.css'
})
export class ProfessionalBackgroundComponent {
  @Input() professional_background_data: any;
}
