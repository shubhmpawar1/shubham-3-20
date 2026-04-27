import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.css'
})
export class GetStartedComponent {
  @Input() get_started_data: any;
}
